import React from 'react';
import Head from 'next/head';
import Error from 'next/error';
import dynamic from 'next/dynamic';

import Header from '~/components/Header';
import Markdown from '~/containers/Markdown';

import { genDocUrl } from '~/utils/docUrl';
import { genMenuTree, MenuNode } from '~/utils/menuTree';

import type { GetStaticProps } from 'next'

const Footer = dynamic(() => import("~/external/footer"));

type MarkdownPageProps = {
  content: string,
  statusCode: number,
  menuTree: MenuNode,
};

export async function getStaticPaths() {
  const path = require('path');
  const fs = require('fs/promises');
  const yml = require('yaml');
  const rawconfig = await fs.readFile(path.resolve(process.cwd(), 'nxtmdoc.yml'), 'utf-8');
  const config = yml.parse(rawconfig);
  const docUrl = await genDocUrl(config.directories[0]);

  return {
    paths: docUrl.map((url) => {
      return {
        params: {
            url: url.split(path.sep),
          },
        }
      }
    ),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require('fs/promises');
  const path = require('path');
  const url = context?.params?.url as string[];
  const filePath = url?.join('/') + '.md';
  const content = await fs.readFile(path.resolve(process.cwd(), filePath), 'utf-8');
  const directory = filePath.split('/')[0];
  const menuTree = await genMenuTree(path.resolve(process.cwd(), directory));
  return {
    props: {
      content,
      menuTree,
    },
  }
}

function MarkdownPage(props: MarkdownPageProps) {
  if (props.statusCode) {
    return <Error statusCode={props.statusCode} />;
  }
  return (
    <Markdown menuTree={props.menuTree} node={props.node} content={props.content} />
  );
}

MarkdownPage.getLayout = (Page: typeof MarkdownPage, props: any) => {
  return (
    <>
      <Head>
          <title>{props.node?.meta.title}</title>
          <meta name="description" content={props.node?.meta.description} />
          <meta name="keywords" content={props.node?.meta.keywords} />
          <meta property="og:url" content={`https://docs.next-hat.com`} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={props.node?.meta.title} />
          <meta property="og:description" content={props.node?.meta.description} />
          <meta property="og:image" content="https://download.next-hat.com/ressources/images/logo.png" />
      </Head>
      <Header {...props} />
      <Page {...props} />
      <Footer />
    </>
  );
};


export default MarkdownPage;
