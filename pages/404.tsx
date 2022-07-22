import React from 'react';
import Header from '~/components/Header';

import Styled from 'styled-components';

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
        <Custom404Link href="/">Go Home</Custom404Link>
      </Custom404Container>
    </Custom404Body>
  );
}

custom404.getLayout = (Page: typeof custom404, props: any) => {
  return (
    <>
      <Header {...props} />
      <Page {...props} />
    </>
  );
};

export default custom404;
