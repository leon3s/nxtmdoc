import React from 'react';
import Header from '~/components/Header';

import type { GetServerSidePropsResult } from 'next';
type SearchPageProps = {
};

import GoogleSearch from '~/components/GoogleSearch';

export const getServerSideProps = async ({}: any): Promise<GetServerSidePropsResult<any>> => {
  return {
    props: {},
  };
};

function SearchPage({}: SearchPageProps) {
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
  );
};

export default SearchPage;
