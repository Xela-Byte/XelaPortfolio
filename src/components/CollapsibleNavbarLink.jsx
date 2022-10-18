import { motion } from "framer-motion";
import { navBarTabVariant } from "../animationVariants/navbarVariants";
import { CollapsibleNavbarLinkContainer } from "../styled/NavBar";

const CollapsibleNavbarLink = ({ link, refProps }) => {
  let linkText = "";
  switch (link) {
    case "Home":
      linkText = "🏡 Home";
      break;
    case "Projects":
      linkText = "⚗️ Projects";
      break;
    case "Skills":
      linkText = "🛠️ Skills";
      break;

    default:
      break;
  }

  return (
    <CollapsibleNavbarLinkContainer
      as={motion.div}
      variants={navBarTabVariant}
      exit={{
        x: "100vw",
      }}
      whileTap={{
        scale: 1.1,
      }}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `#${link}`;
      }}
    >
      <p>{linkText}</p>
    </CollapsibleNavbarLinkContainer>
  );
};

export default CollapsibleNavbarLink;
