import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from '~/components/Header';
import HomeContainer from '~/containers/Home';

const Footer = dynamic(() => import("~/external/footer"));

import type { GetStaticProps } from 'next';

type IndexPageProps = {
  body: string,
};

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs/promises');
  const path = require('path');
  const yml = require('yaml');
  const rawconfig = await fs.readFile(path.resolve(process.cwd(), 'nxtmdoc.yml'), 'utf-8');
  const config = yml.parse(rawconfig);
  return {
    props: {
      config,
    },
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
      <Head>
        <title>{props.config.title}</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="description" content="Welcome on documentation for Next Hat based products and tools such as Nanocl and more" />
        <meta property="keywords" content="Next Hat, next hat, next-hat, nanocl, docker, container, cluster, replication, hight avaibility, daemon, vpn, ipsec, ikev2, cloud, cloud-hybride, hybrid, devops, blazing fast, cicd, qemu, vm, virtual machine" />
        <link rel="shortcut icon" href="https://download.next-hat.com/ressources/images/logo.png" type="image/png" />
        <meta property="og:url" content="https://docs.next-hat.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Next Hat - Documentation" />
        <meta property="og:description" content="Welcome on documentation for Next Hat based products and tools such as Nanocl and more" />
        <meta property="og:image" content="https://download.next-hat.com/ressources/images/logo.png" />
      </Head>
      <Header {...props} />
      <Page {...props} />
      <Footer {...props} />
    </>
  );
};

export default IndexPage;
