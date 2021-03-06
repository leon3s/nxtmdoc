import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { themeDefault } from '~/styles/themes';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '~/styles/fontawesome.min.css';
import '~/styles/regular.min.css';
import '~/styles/solid.min.css';
import '~/styles/default.css';
import Script from 'next/script';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: any, props: any) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

class MyApp extends App<AppPropsWithLayout> {
  public static getInitialProps = async ({}) => {
    return {
      pageProps: {},
    };
  };

  public render() {
    const {Component, pageProps} = this.props;
    const getLayout = Component.getLayout ?? ((Page: any, props: any) => <Page {...props} />);
    return (
      <ThemeProvider theme={themeDefault}>
        <React.Fragment>
          <Head>
            <title>Next Hat documentation</title>
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
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KRJ1J2E52X" />
          <Script id="google-analitics" async>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KRJ1J2E52X');
          `}
          </Script>
          {getLayout(Component, pageProps)}
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default MyApp;
