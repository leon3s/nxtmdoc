import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  flex: 1;
  background-color: #F7F7F8;
`;

export const Center = Styled.div`
  margin: 40px;
  @media only screen and (max-width: 800px) {
    margin: 0px;
  }
`;

export const HeroContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px;
`;

export const Title = Styled.h2`
  text-align: center;
`;

export const GridLink = Styled.a`
  background-color: white;
  height: 180px;
  width: auto;
  box-shadow: 0 3px 6px rgb(11 33 74 / 9%), 0 -2px 2px rgb(11 33 74 / 3%);
  padding: 24px 24px;
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  :hover {
    opacity: 1;
    transform: scale(1.01);
  }
`;

export const GridIcon = Styled.img`
  width: 60px;
  height: 60px;
`;

export const GridTitle = Styled.h5`
  margin-bottom: 8px;
`;

export const GridDesription = Styled.p`
  margin: 0px;
  margin-bottom: 10px;
`;
