import React from 'react';
import Error from 'next/error';
import Header from '~/components/Header';
import Markdown from '~/containers/Markdown';

import type { GetServerSidePropsResult } from 'next';
import type { DocTreeNode } from 'types/doc_tree.h';

type MarkdownPageProps = {
  content: string,
  node: DocTreeNode,
  statusCode: number,
  tree: DocTreeNode,
};

export const getServerSideProps = 
async (ctx: any): Promise<GetServerSidePropsResult<any>> => {
  return {
    props: ctx.query,
  };
};

function MarkdownPage(props: MarkdownPageProps) {
  if (props.statusCode) {
    return <Error statusCode={props.statusCode} />;
  }
  return (
    <Markdown tree={props.tree} node={props.node} content={props.content} />
  );
}

MarkdownPage.getLayout = (Page: typeof MarkdownPage, props: any) => {
  return (
    <>
      <Header {...props} />
      <Page {...props} />
    </>
  );
};

export default MarkdownPage;
