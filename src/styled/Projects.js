import styled from 'styled-components';
import { Centering, colors, fontSizes } from './UniversalStyles';

export const ProjectsWrapper = styled.div`
  width: 100%;
  height: 110vh;
  background: ${colors.black};
  color: ${colors.white};
  ${Centering}
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 990px) {
    padding: 5%;
  }
`;

export const ProjectHeaderText = styled.p`
  font-size: ${fontSizes.medium};
  text-align: center;
  @media screen and (max-width: 990px) {
    font-size: ${fontSizes.large};
  }
`;

export const ProjectDescText = styled.div`
  width: 40%;
  font-size: 3vh;
  text-align: center;
  margin: auto;
  @media screen and (max-width: 990px) {
    text-align: start;
    width: 100%;
    font-size: ${fontSizes.medium};
  }
`;

export const ProjectTabContainer = styled.div`
  width: 100%;
  padding: 2%;
  ${Centering}
  gap: 3%;
`;

export const ProjectTab = styled.div`
  width: 20%;
  padding: 20px;
  border-radius: 15px;
  ${Centering}
  background: linear-gradient(
    to right bottom,
    ${colors.lightPurple},
    ${colors.deepPurple}
  );
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      to right bottom,
      ${colors.deepPurple},
      ${colors.lightPurple}
    );
  }
  font-size: 23px;
  font-weight: 400;
  @media screen and (max-width: 990px) {
    width: fit-content;
    padding: 10px;
    margin-bottom: 5%;
    font-size: ${fontSizes.medium};
  }
`;

export const ProjectShowCaseContainer = styled.div`
  width: 70%;
  height: 55%;
  margin: auto;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;
