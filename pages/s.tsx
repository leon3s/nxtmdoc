import React from 'react';
import Header from '~/components/Header';

import type { GetServerSidePropsResult } from 'next';
type SearchPageProps = {
};

import Script from 'next/script';
import GoogleSearch from '~/components/GoogleSearch';

export const getServerSideProps = async (ctx: any): Promise<GetServerSidePropsResult<any>> => {
  return {
    props: {},
  };
}

function SearchPage(props: SearchPageProps) {
  return (
    <>
      <GoogleSearch />
    </>
  );
}

SearchPage.getLayout = (Page: typeof SearchPage, props: any) => {
  return (
    <>
      <Header {...props} />
      <Page {...props} />
    </>
  )
}

export default SearchPage;
