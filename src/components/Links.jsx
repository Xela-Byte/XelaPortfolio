import { LinkContainer, LinkTab } from "../styled/Links";
import { projectLinks } from "../utils/Links";

const Links = () => {
  const copyToClipboard = (name, link) => {
    navigator.clipboard.writeText(link);
    alert(`${name}'s link has been copied successfully`);
  };
  return (
    <LinkContainer>
      {projectLinks.map((project) => {
        const { id, projectName, projectLink, projectImage } = project;
        return (
          <LinkTab
            key={id}
            onClick={() => copyToClipboard(projectName, projectLink)}
          >
            <img src={projectImage} alt="" />
            <div>
              <p>{projectName}</p>
              <a href={projectLink}>{projectLink}</a>
            </div>
          </LinkTab>
        );
      })}
    </LinkContainer>
  );
};

export default Links;
