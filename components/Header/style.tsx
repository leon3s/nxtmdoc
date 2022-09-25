import Styled from '@emotion/styled';

export const ShadowContainer = Styled.div`
  min-height: 62px;
  max-height: 62px;
  width: 100%;
  position: relative;
  background-color: #1B1B1D;
`;

export const ContainerHeader = Styled.div`
  width: 100%;
  height: 62px;
  position: fixed;
  box-shadow: 0 3px 6px rgb(11 33 74 / 9%), 0 -2px 2px rgb(11 33 74 / 3%);
  z-index: 999;
  background-color: #1B1B1D;
`;

export const ContentHeader = Styled.div`
  height: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitleLink = Styled.a`
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = Styled.h1`
  color: white;
  margin: 0;
  padding-left: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 22px;
  a {
    color: white;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const ContentHeaderLeft = Styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const ContentHeaderCenter = Styled.div`
  width: auto;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const HeaderNav = Styled.ul`
  flex: 1;
  float: left;
  margin: 0;
  display: flex;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  list-style: none;
  padding-left: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const ContentHeaderRight = Styled.div`
`;

export const HeaderLink = Styled.a<{
  selected: boolean,
}>`
  padding: 0px 8px;
  margin: 0px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  color: white !important;
  justify-content: center;
  height: 100%;
  &:hover {
    color: orange !important;
  }
  ${props => props.selected ? `
    color: orange !important;
  ` : `
  `}
`;


export const MobileHeaderMenu = Styled.div`
  position: relative;
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

export const MobileHeaderMenuFixed = Styled.div<{
  isOpen: boolean,
}>`
  position: fixed;
  right: 0px;
  top: 84px;
  transition-duration: 0.8s;
  transition-property: right;
  ${props => props.isOpen ? `
    right: 0px;
  ` : `
    right: -242px;
  `}
`;

export const MenuButton = Styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const MenuButtonIcon = Styled.div<{
  isOpen: boolean,
}>`
  font-size: 24px;
  color: white;
  transition-duration: 0.8s;
  transition-property: transform;
  ${props => props.isOpen ? `
  transform: rotate(90deg);
  ` : `
  `}
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

