import React from 'react';
import Head from 'next/head';
import Header from '~/components/Header';

import Styled from '@emotion/styled';
import Link from 'next/link';

const Custom404Body = Styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Custom404Container = Styled.div`
  position: relative;
  top: -142px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  padding: 40px;
  flex-direction: column;
  width: 400px;
  weight: 400px;
`;

const Custom404Title = Styled.h1`
  font-size: 22px;
  text-align: center;
`;

const Custom404Link = Styled.a`
  text-align: center;
`;

function custom404() {
  return (
    <Custom404Body>
      <Custom404Container>
        <Custom404Title>
          Oups you seems lost
        </Custom404Title>
        <Link href="/" passHref>
          <Custom404Link>Go Home</Custom404Link>
        </Link>
      </Custom404Container>
    </Custom404Body>
  );
}

custom404.getLayout = (Page: typeof custom404, props: any) => {
  return (
    <>
      <Head>
        <title>Not Found - Next Hat Documentation</title>
        <meta property="description" content="This page not exist" />
        <link rel="shortcut icon" href="https://download.next-hat.com/ressources/images/logo.png" type="image/png" />
        <meta property="og:url" content="https://docs.next-hat.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Next Hat documentation" />
        <meta property="og:description" content="This page not exist" />
        <meta property="og:image" content="https://download.next-hat.com/ressources/images/logo.png" />
      </Head>
      <Header {...props} />
      <Page {...props} />
    </>
  );
};

export default custom404;
