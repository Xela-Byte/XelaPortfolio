import styled from 'styled-components';
import { Centering, colors } from './UniversalStyles';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 999;
  position: relative;
 
`;

export const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;
export const HomeDisplayContainer = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 990px) {
    width: 100%;
    ${Centering}
    flex-direction: column;
  }
`;
export const HomeDisplayContent = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  color: white;
  padding: 2%;
  @media screen and (max-width: 990px) {
    width: 100%;
    font-size: 16px;
    ${Centering}
    justify-content: start;
    flex-direction: column;
  }
`;

export const HomeWelcomeText = styled.div`
  width: 50%;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  font-size: 3vh;
  background: linear-gradient(
    to right bottom,
    ${colors.deepBlack},
    ${colors.black}
  );
  @media screen and (max-width: 990px) {
    width: 80%;
    font-size: 16px;
  }
`;

export const HomeDisplayText = styled.div`
  width: 100%;
  height: 70%;
  padding: 5%;
  font-size: 5vh;
  font-weight: 700;
`;

export const HomeShuffleText = styled.span`
  border-right: 1px solid ${colors.grey};
`;

export const HomeHeaderImage = styled.img`
  width: 50%;
  z-index: -4;
  @media screen and (max-width: 990px) {
    display: none;
  }
`;
