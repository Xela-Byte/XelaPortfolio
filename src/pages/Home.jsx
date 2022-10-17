import { useEffect, useState } from "react";
import {
  HomeContainer,
  HomeContent,
  HomeDisplayContainer,
  HomeDisplayContent,
  HomeDisplayText,
  HomeHeaderImage,
  HomeImage,
  HomeShuffleText,
} from "../styled/Home";
import NavBar from "../components/NavBar";
import HomeDisplayImage from "../assets/images/display/banner-bg.gif";
import HomeDesktopDisplayImage from "../assets/images/display/banner-bg-desktop.gif";
import Gead from "../assets/images/display/header-img.svg";
import { stickyNavBar } from "../styled/NavBar";
import useGetWindowWidth from "../hooks/useWindowSize";
import { motion } from "framer-motion";
import { textShuffleVariant } from "../animationVariants/variants";
import { logoVariant } from "../animationVariants/logoVariants";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const windowWidth = useGetWindowWidth().innerWidth;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toShuffle = [
    "Web Developer",
    "App Developer",
    "Someone That Bring Cool Designs To Life!",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 10);
  const period = 1000;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const tick = () => {
    let i = loopNum % toShuffle.length;
    let fullText = toShuffle[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text, delta]);

  return (
    <HomeContainer id="Home">
      <HomeImage
        src={windowWidth > 990 ? HomeDesktopDisplayImage : HomeDisplayImage}
      />
      <HomeContent>
        <NavBar sticky={scrolled ? stickyNavBar : ""} />
        <HomeDisplayContent>
          <HomeDisplayContainer>
            <HomeDisplayText>
              I'm Xela!, {""}
              <HomeShuffleText
                as={motion.span}
                variants={textShuffleVariant}
                initial="initial"
                animate="animate"
              >
                {text}
              </HomeShuffleText>
            </HomeDisplayText>{" "}
          </HomeDisplayContainer>

          <HomeHeaderImage
            as={motion.img}
            src={Gead}
            alt=""
            variants={logoVariant}
            initial="initial"
            whileInView="animate"
          />
        </HomeDisplayContent>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
