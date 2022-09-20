import React from 'react';
import Script from 'next/script';
import Header from '~/components/Header';
import GoogleSearch from '~/components/GoogleSearch';
import type { GetServerSidePropsResult } from 'next';
import Head from 'next/head';

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
      <Head>
        <title>Next Hat Doc</title>
        <meta property="description" content="Welcome on documentation for Next Hat based products and tools such as nanocl and more" />
        <meta property="keywords" content="nanocl, docker, container, cluster, replication, hight avaibility, daemon, vpn, ipsec, ikev2, cloud, cloud-hybride, hybrid, devops, blazing fast, cicd, qemu, vm, virtual machine" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="shortcut icon" href="https://download.next-hat.com/ressources/images/logo.png" type="image/png" />
        <meta property="og:url" content="https://docs.next-hat.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Next Hat documentation" />
        <meta property="og:description" content="Welcome on documentation for Next Hat based products and tools such as nanocl and more" />
        <meta property="og:image" content="https://download.next-hat.com/ressources/images/logo.png" />
      </Head>
      <Header {...props} />
      <Page {...props} />
    </>
  );
};

export default SearchPage;
