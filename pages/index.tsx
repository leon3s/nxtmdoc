import React from 'react';
import Header from '~/components/Header';
import HomeContainer from '~/containers/Home';

import type { GetServerSidePropsResult } from 'next';

type IndexPageProps = {
  body: string,
};

export const getServerSideProps = async (ctx: any): Promise<GetServerSidePropsResult<any>> => {
  return {
    props: ctx.query,
  };
};

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
  );
};

export default IndexPage;
