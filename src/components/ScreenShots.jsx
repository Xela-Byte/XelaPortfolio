import { motion } from "framer-motion";
import {
  ScreenshotContainer,
  ScreenshotImageContainer,
  ScreenshotInfo,
} from "../styled/Screenshots";
import { desktopScreenshots } from "../utils/Screenshots";
import { fadeVariant } from "../animationVariants/fadeVariants";

const ScreenShots = () => {
  return (
    <ScreenshotContainer
      as={motion.div}
      initial="initial"
      whileInView="animate"
      variants={fadeVariant}
    >
      {desktopScreenshots.map((screenshot) => {
        const { id, screenshotImage, screenshotInfo } = screenshot;
        return (
          <ScreenshotImageContainer key={id}>
            <ScreenshotInfo>
              <p>{screenshotInfo}</p>
            </ScreenshotInfo>
            <img src={screenshotImage} alt="" />
          </ScreenshotImageContainer>
        );
      })}
    </ScreenshotContainer>
  );
};

export default ScreenShots;
