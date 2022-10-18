import { motion, AnimatePresence } from "framer-motion";
import {
  SkillDescText,
  SkillHeaderText,
  SkillMeter,
  SkillMeterContainer,
  SkillMeterContent,
  SkillsContainer,
  SkillsWrapper,
} from "../styled/Skills";
import meter1 from "../assets/images/display/meter1.svg";
import meter2 from "../assets/images/display/meter2.svg";
import meter3 from "../assets/images/display/meter3.svg";
import { fadeVariant } from "../animationVariants/fadeVariants";

const Skills = () => {
  return (
    <SkillsWrapper id="Skills">
      <SkillsContainer
        as={motion.div}
        variants={fadeVariant}
        initial="initial"
        whileInView="animate"
      >
        <SkillHeaderText>Skills</SkillHeaderText>
        <SkillDescText>
          Here is a quick display of what I'm capable of.
        </SkillDescText>
        <SkillDescText> Enjoy!</SkillDescText>
        <AnimatePresence>
          <SkillMeterContainer
            as={motion.div}
            initial={{}}
            whileInView={{
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
              },
            }}
          >
            <SkillMeterContent
              as={motion.div}
              variants={fadeVariant}
              initial="initial"
              whileInView="animate"
            >
              <SkillMeter
                src={meter1}
                alt=""
                as={motion.img}
                whileHover={{
                  scale: 1.1,
                }}
              />
              Web Development
            </SkillMeterContent>
            <SkillMeterContent
              as={motion.div}
              variants={fadeVariant}
              initial="initial"
              whileInView="animate"
            >
              <SkillMeter
                src={meter3}
                alt=""
                as={motion.img}
                whileHover={{
                  scale: 1.1,
                }}
              />
              UI/UX Integration
            </SkillMeterContent>
            <SkillMeterContent
              as={motion.div}
              variants={fadeVariant}
              initial="initial"
              whileInView="animate"
            >
              <SkillMeter
                src={meter2}
                alt=""
                as={motion.img}
                whileHover={{
                  scale: 1.1,
                }}
              />
              SEO Capabilities
            </SkillMeterContent>
          </SkillMeterContainer>
        </AnimatePresence>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default Skills;
