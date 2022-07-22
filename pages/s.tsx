import React from 'react';
import Script from 'next/script';
import Header from '~/components/Header';
import GoogleSearch from '~/components/GoogleSearch';
import type { GetServerSidePropsResult } from 'next';

type SearchPageProps = {};

export const getServerSideProps = async ({}: any): Promise<GetServerSidePropsResult<any>> => {
  return {
    props: {},
  };
};

function SearchPage({}: SearchPageProps) {
  return (
    <>
      <Script async src="https://cse.google.com/cse.js?cx=5c4a0cc2eff9d52d2" />
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
  );
};

export default SearchPage;
