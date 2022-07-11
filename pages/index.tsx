import axios from 'axios';
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

export const getServerSideProps = async ({}): Promise<GetServerSidePropsResult<any>> => {
  try {
    const res = await axios.get("http://localhost:3001/api/config");
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
