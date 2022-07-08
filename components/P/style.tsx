import Styled from 'styled-components';

export const P = Styled.p`
  ${props => `
    color: ${props.theme.text.color.primary};
    font-size: ${props.theme.text.fontSize.text};
  `}
`;
