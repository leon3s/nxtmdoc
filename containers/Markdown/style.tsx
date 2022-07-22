import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const MenuContainer = Styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ContainerMarkdown = Styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  overflow: hidden;
`;
