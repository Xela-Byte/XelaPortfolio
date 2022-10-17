import { motion } from "framer-motion";
import { navBarTabVariant } from "../animationVariants/navbarVariants";
import { CollapsibleNavbarLinkContainer } from "../styled/NavBar";

const CollapsibleNavbarLink = ({ link }) => {
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
    >
      <a href={`#${link.slice(1)}`}>{link}</a>
    </CollapsibleNavbarLinkContainer>
  );
};

export default CollapsibleNavbarLink;
