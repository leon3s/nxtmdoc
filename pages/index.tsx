import React from 'react';
import Header from '~/components/Header';
import HomeContainer from '~/containers/Home';

import type { GetServerSidePropsResult } from 'next';
type IndexPageProps = {
  home_page_blocks: {
    title: string,
    description: string,
    icon: string,
    url: string,
  }[]
};

export const getServerSideProps = async (ctx: any): Promise<GetServerSidePropsResult<any>> => {
  return {
    props: {
      header_links: ctx.query.header_links || [],
      home_page_blocks: ctx.query.home_page_blocks,
    },
  };
}

function IndexPage(props: IndexPageProps) {
  return (
    <HomeContainer {...props} />
  );
}

IndexPage.getLayout = (Page: typeof IndexPage, props: any) => {
  return (
    <>
      <Header {...props} />
      <Page {...props} />
    </>
  )
}

export default IndexPage;

