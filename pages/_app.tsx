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
            <title>nxtmdoc</title>
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            <meta name="viewport" content="width=device-width, user-scalable=no" />
          </Head>
          {getLayout(Component, pageProps)}
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default MyApp;
