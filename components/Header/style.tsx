import Styled from 'styled-components';

export const ShadowContainer = Styled.div`
  min-height: 84px;
  max-height: 84px;
  width: 100%;
  position: relative;
  background-color: #ffa500;
`;

export const ContainerHeader = Styled.div`
  width: 100%;
  height: 84px;
  position: fixed;
  z-index: 999;
  background-color: #23292f;
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
`;

export const HeaderTitle = Styled.h1`
  color: white;
  margin: 0;
  padding-left: 8px;
  font-size: 14px;
  a {
    color: white;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const ContentHeaderLeft = Styled.div`
`;

export const ContentHeaderCenter = Styled.div`
  display: flex;
  width: auto;
  flex: 1;
`;

export const HeaderNav = Styled.ul`
  flex: 1;
  float: left;
  margin: 0;
  display: flex;
  justify-content: right;
  list-style: none;
  padding-left: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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
  line-height: 25px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 4px solid rgba(0, 0, 0, 0);
  &:hover {
    opacity: 0.6;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-bottom-color: white;
  }
  ${props => props.selected ? `
    border-bottom-color: white;
  ` : `
  `}
`;


export const MobileHeaderMenu = Styled.div`
  position: relative;
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
  @media only screen and (min-width: 601px) {
    display: none;
  }
`;

