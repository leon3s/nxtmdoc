import Styled from 'styled-components';

export const Button = Styled.button`
  border: 0px;
  padding: 8px;
  cursor: pointer;
  ${props => `
    border-radius: ${props.theme.borderRadius};
    color: ${props.theme.button.color.primary};
    background: ${props.theme.button.background.primary};
  `}
`;
