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
            <meta name="viewport" content="width=device-width, user-scalable=no" />
            <link rel="shortcut icon" href="https://download.next-hat.com/ressources/images/logo.png" type="image/png" />
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
