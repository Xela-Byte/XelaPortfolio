import styled from "styled-components";

export const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  cursor: pointer;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 8px;
    background: #eee;
  }
  @media screen and (max-width: 990px) {
    height: auto;
    overflow: hidden;
  }
`;

export const LinkTab = styled.div`
  width: 100%;
  padding: 3%;
  display: flex;
  gap: 5%;
  & > img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  & > div > p {
    font-size: 4vh;
    margin-bottom: 10px;
  }
  & > div > a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 990px) {
    & > img {
      width: 50px;
      height: 50px;
    }
    & > div > p {
      font-size: 20px;
    }
  }
`;
