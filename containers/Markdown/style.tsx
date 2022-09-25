import Styled from '@emotion/styled';

export const MainContainer = Styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  color: white;
`;

export const MenuContainer = Styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const DivLinked = Styled.div`
  position: relative;
  top: -80px;
  :visible {
    background-color: blue;
  }
`;

export const ContainerMarkdown = Styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

export const MenuRight = Styled.div`
  width: 242px;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const MenuRightFixed = Styled.div`
  padding: 20px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const MenuRightLine = Styled.div`
`;

export const MenuRightLink = Styled.a`
  margin: 0px;
  padding: 8px 8px;
  font-size: 12px;
  border-left: 4px solid rgba(0, 0, 0, 0);
`;

export const Icon = Styled.i`
  padding-right: 4px;
  color: #ff9800;
`;

export const MenuRightPageTitle = Styled.p`
  font-weight: bold;
  font-size: 12px;
  margin: 4px 0px;
`;
