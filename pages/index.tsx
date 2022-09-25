import React from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Next Hat Doc</title>
        <meta property="description" content="Welcome on documentation for Next Hat based products and tools such as nanocl and more" />
        <meta property="keywords" content="next-hat, next hat, next, hat, documentation, doc, next hat doc, next doc, hat doc, nanocl, docker, container, cluster, replication, hight avaibility, daemon, vpn, ipsec, ikev2, cloud, cloud-hybride, hybrid, devops, blazing fast, cicd, qemu, vm, virtual machine" />
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

export default IndexPage;
