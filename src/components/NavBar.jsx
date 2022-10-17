import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CollapsibleNavbarContainer,
  CollapsibleNavbarContent,
  NavBarIcon,
  NavButton,
  NavContainer,
  NavImage,
  NavLink,
  NavLinkIcon,
  NavLinkIcons,
  NavLogo,
} from "../styled/NavBar";
import NavIcon1 from "../assets/images/display/nav-icon1.svg";
import NavIcon2 from "../assets/images/display/nav-icon2.svg";
import NavIcon3 from "../assets/images/display/github.svg";
import NavArrow from "../assets/images/display/nav-arrow.svg";
import NavCloseBtn from "../assets/images/display/close.svg";
import useGetWindowSize from "../hooks/useWindowSize";
import { navBarTabContainerVariant } from "../animationVariants/navbarVariants";
import { buttonVariant } from "../animationVariants/buttonVariants";
import { logoVariant } from "../animationVariants/logoVariants";
import CollapsibleNavbarLink from "./CollapsibleNavbarLink";

const NavBar = ({ sticky }) => {
  const windowWidth = useGetWindowSize().innerWidth;
  const { position, top, background, height } = sticky;

  const [showLinks, setShowLinks] = useState(false);
  const showLink = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <NavContainer
        style={{
          position: position,
          top: top,
          background: background,
          height: height,
        }}
      >
        <NavLogo
          as={motion.div}
          variants={logoVariant}
          initial="initial"
          whileInView="animate"
        >
          Xela🛠️!
        </NavLogo>
        {windowWidth > 990 ? (
          <>
            <NavLink
              as={motion.div}
              variants={buttonVariant}
              initial="initial"
              whileHover="animate"
              whileInView="grow"
              whileTap="tap"
            >
              <a href="#Home">Home</a>
            </NavLink>
            <NavLink
              as={motion.div}
              variants={buttonVariant}
              initial="initial"
              whileHover="animate"
              whileInView="grow"
              whileTap="tap"
            >
              <a href="#Skills">Skills</a>
            </NavLink>
            <NavLink
              as={motion.div}
              variants={buttonVariant}
              initial="initial"
              whileHover="animate"
              whileInView="grow"
              whileTap="tap"
            >
              <a href="#Projects">Projects</a>
            </NavLink>
            <NavLinkIcons>
              <NavLinkIcon
                as={motion.div}
                variants={buttonVariant}
                initial="initial"
                whileHover="animate"
                whileInView="grow"
                whileTap="tap"
              >
                <NavImage src={NavIcon1} alt="" />
              </NavLinkIcon>
              <NavLinkIcon
                as={motion.div}
                variants={buttonVariant}
                initial="initial"
                whileHover="animate"
                whileInView="grow"
                whileTap="tap"
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/profile.php?id=100086598125418")
                }
              >
                <NavImage src={NavIcon2} alt="" />
              </NavLinkIcon>
              <NavLinkIcon
                as={motion.div}
                variants={buttonVariant}
                initial="initial"
                whileHover="animate"
                whileInView="grow"
                whileTap="tap"
                onClick={() =>
                  (window.location.href = "https://github.com/Xela-Byte")
                }
              >
                <NavImage src={NavIcon3} alt="" />
              </NavLinkIcon>
            </NavLinkIcons>
            <NavButton as={motion.div} variants={buttonVariant} whileTap="tap">
              Let's Connect🚀!
            </NavButton>
          </>
        ) : (
          <CollapsibleNavbarContainer
            onClick={() => {
              showLink();
            }}
          >
            {showLinks ? (
              <NavBarIcon
                src={NavCloseBtn}
                as={motion.img}
                whileTap={{ rotateY: 90 }}
              />
            ) : (
              <NavBarIcon
                src={NavArrow}
                as={motion.img}
                whileTap={{ rotateY: 90 }}
              />
            )}
          </CollapsibleNavbarContainer>
        )}
        <AnimatePresence>
          {windowWidth < 990 && showLinks && (
            <CollapsibleNavbarContent
              as={motion.div}
              variants={navBarTabContainerVariant}
              initial="initial"
              animate="animate"
            >
              <CollapsibleNavbarLink link={"🏡Home"} />
              <CollapsibleNavbarLink link={"🛠️Skills"} />
              <CollapsibleNavbarLink link={"⚗️Projects"} />
            </CollapsibleNavbarContent>
          )}
        </AnimatePresence>
      </NavContainer>
    </>
  );
};

export default NavBar;
