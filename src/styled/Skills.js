import styled from "styled-components";
import { Centering, colors, fontSizes } from "./UniversalStyles";

export const SkillsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 5%;
  background: ${colors.black};
  font-family: "Monts", sans-serif;
`;

export const SkillsContainer = styled.section`
  width: 80%;
  height: 75vh;
  padding: 5%;
  margin: auto;
  border-radius: 1.5rem;
  margin-top: -15vh;
  position: relative;
  background: ${colors.deepBlack};
  color: ${colors.white};
  text-align: center;
  background: linear-gradient(145deg, #00040c, #00040e);
  box-shadow: 24px 24px 49px #000205, -24px -24px 49px #000615;
  @media screen and (max-width: 990px) {
    height: 95%;
    width: 95%;
  }
`;

export const SkillHeaderText = styled.p`
  font-size: calc(${fontSizes.medium} - 1vw);
  @media screen and (max-width: 990px) {
    font-size: ${fontSizes.large};
  }
`;

export const SkillDescText = styled.p`
  font-size: ${fontSizes.small};
  font-weight: 400;

  @media screen and (max-width: 990px) {
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: ${fontSizes.medium};
  }
`;

export const SkillMeterContainer = styled.div`
  width: 90%;
  height: 50%;
  margin: auto;
  ${Centering}
  @media screen and (max-width: 990px) {
    height: 80%;
    gap: 30px;
    flex-direction: column;
  }
`;

export const SkillMeterContent = styled.div`
  width: 30%;
  height: 100%;
  ${Centering}
  gap: 5%;
  flex-direction: column;
  @media screen and (max-width: 990px) {
    gap: 30px;
  }
`;

export const SkillMeter = styled.img`
  width: 70%;
  height: 70%;
`;
