import React from 'react';

import * as Style from './style';

type PProps = {
  children: React.ReactNode;
}

const P = React.memo<PProps>(function P(props) {
  return (
    <Style.P>
      {props.children}
    </Style.P>
  );
});

export default P;
