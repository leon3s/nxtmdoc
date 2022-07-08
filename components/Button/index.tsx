import React from 'react';

import * as Style from './style';

type ButtonProps = {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.memo<ButtonProps>(function Button(props) {
  return (
    <Style.Button
      onClick={props.onClick}
    >
      {props.children}
    </Style.Button>
  );
});

export default Button;
