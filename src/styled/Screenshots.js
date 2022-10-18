import styled from "styled-components";
import { Centering, colors } from "../styled/UniversalStyles";

export const ScreenshotContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 5%;
  column-gap: 2%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 8px;
    background: #eee;
  }
`;

export const ScreenshotImageContainer = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: "0.4s ease-in-out";
  & > img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    & > div {
      opacity: 1;
      height: 100%;
    }
  }
`;

export const ScreenshotInfo = styled.div`
  position: absolute;
  width: 100%;
  display: none;
  opacity: 0;
  background: rgb(153, 122, 240, 0.8);
  border-radius: 5px;
  height: 0;
  ${Centering}
  & > p {
    color: ${colors.black};
    font-size: 3vh;
    font-weight: 600;
    text-align: center;
  }
`;
