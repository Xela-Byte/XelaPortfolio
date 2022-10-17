import styled from "styled-components";
import { Centering } from "./UniversalStyles";
import { colors } from "./UniversalStyles";

export const NavContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  position: relative;
  color: ${colors.white};
`;

export const NavLogo = styled.div`
  width: 10%;
  height: 100%;
  padding-left: 10px;
  font-size: 5vh;
  font-weight: 700;
  ${Centering}
  margin-right: 25%;
  cursor: pointer;
  @media screen and (max-width: 990px) {
    width: 70%;
    font-size: 4vh;
  }
`;

export const NavLink = styled.div`
  width: 10%;
  height: 100%;
  ${Centering}
  cursor: pointer;
`;

export const NavLinkIcons = styled.div`
  width: 15%;
  height: 100%;
  ${Centering}
  gap: calc(30% - 40px);
`;

export const NavLinkIcon = styled.div`
  width: 40px;
  ${Centering}
  height: 40px;
  background: ${colors.black};
  border: 1px solid ${colors.white};
  border-radius: 50%;
  cursor: pointer;
`;

export const NavImage = styled.img``;

export const NavButton = styled.div`
  width: 15%;
  margin-top: 1%;
  height: 60%;
  ${Centering}
  border: 2px solid #eee;
  border-radius: 10px;
  cursor: pointer;
`;

export const stickyNavBar = {
  position: "fixed",
  top: 0,
  background: colors.black,
  height: "12vh",
};

export const CollapsibleNavbarContainer = styled.div`
  width: 50%;
  height: 100%;
  ${Centering}
`;

export const CollapsibleNavbarContent = styled.div`
  width: 100%;
  height: 25vh;
  position: absolute;
  top: 15vh;
  z-index: 999;
  ${Centering}
  flex-direction: column;
`;

export const CollapsibleNavbarLinkContainer = styled.div`
  width: 95%;
  height: 30%;
  padding: 3%;
  margin-bottom: 1%;
  text-align: center;
  background: ${colors.black};
  z-index: 9999;
  border-radius: 10px;
`;

export const NavBarIcon = styled.img`
  width: 40px;
  height: 40px;
`;
