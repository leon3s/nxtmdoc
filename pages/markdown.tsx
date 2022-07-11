import Error from 'next/error';
import React from 'react';
import Header from '~/components/Header';
import Markdown from '~/containers/Markdown';
import axios from 'axios';

import type { GetServerSidePropsResult } from 'next';
import type { DocTreeNode } from 'types/doc_tree.h';

type MarkdownPageProps = {
  content: string,
  node: DocTreeNode,
  statusCode: number,
  menu_tree: DocTreeNode,
};

export const getServerSideProps = 
async (ctx: any): Promise<GetServerSidePropsResult<any>> => {
  if (!ctx.query.route_path) {
    return {
      props: {
        statusCode: 404,
      },
    };
  }
  try {
    const res = await axios.get("http://localhost:3001/api" + ctx.query.route_path);
    return {
      props: res.data,
    }
  } catch (e: any) {
    return {
      props: {
        statusCode: e?.response?.status || 404,
      },
    }
  }
}

function MarkdownPage(props: MarkdownPageProps) {
  if (props.statusCode) {
    return <Error statusCode={props.statusCode} />;
  }
  return (
    <Markdown tree={props.menu_tree} node={props.node} content={props.content} />
  );
}

MarkdownPage.getLayout = (Page: typeof MarkdownPage, props: any) => {
  return (
    <>
      <Header {...props} />
      <Page {...props} />
    </>
  )
}

export default MarkdownPage;
