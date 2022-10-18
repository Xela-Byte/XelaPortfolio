import { useState } from "react";
import {
  ProjectDescText,
  ProjectHeaderText,
  ProjectsContainer,
  ProjectShowCaseContainer,
  ProjectsWrapper,
  ProjectTab,
  ProjectTabContainer,
} from "../styled/Projects";
import ScreenShots from "../components/ScreenShots";
import Description from "../components/Description";
import Links from "../components/Links";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleActiveTab = (tabActive) => {
    setActiveTab(tabActive);
  };

  let tab;
  switch (activeTab) {
    case "screenshots":
      tab = <ScreenShots />;
      break;
    case "links":
      tab = <Links />;
      break;
    case "description":
      tab = <Description />;
      break;

    default:
      tab = <ScreenShots />;
      break;
  }
  return (
    <ProjectsWrapper id="Projects">
      <ProjectsContainer>
        <ProjectHeaderText>Projects</ProjectHeaderText>
        <ProjectDescText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          culpa, unde molestiae sed repudiandae praesentium dolorum laborum amet
          exercitationem repellendus!
        </ProjectDescText>
        <ProjectTabContainer>
          <ProjectTab onClick={() => handleActiveTab("screenshots")}>
            ScreenShots
          </ProjectTab>
          <ProjectTab onClick={() => handleActiveTab("links")}>
            Links
          </ProjectTab>
          <ProjectTab onClick={() => handleActiveTab("description")}>
            Description
          </ProjectTab>
        </ProjectTabContainer>
        <ProjectShowCaseContainer>{tab}</ProjectShowCaseContainer>
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
