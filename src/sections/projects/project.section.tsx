import { Box, Stack, Typography } from "@mui/material";
import {
  api,
  noteTaker,
  PawfectMatchLogo,
  reactBadge,
  typescriptBadge,
} from "assets";
import { IoLogoFirebase } from "react-icons/io5";
import { SiPostman, SiVite } from "react-icons/si";
import { TbBrandMantine } from "react-icons/tb";
import { ProjectCard } from "../../components/project-card/project-card.component";
import "./project.section.css";

export const ProjectsSection: React.FC = () => {
  const MantineIcon: React.ElementType = () => (
    <span>
      <TbBrandMantine size="large" color="#309af0" />
    </span>
  );

  const ApiIcon: React.ElementType = () => (
    <span>
      <img width="40px" height="40px" alt="API Icon" src={api} />
    </span>
  );

  const TypescriptIcon: React.ElementType = () => (
    <span>
      <img
        width="40px"
        height="40px"
        alt="TypeScript Badge"
        src={typescriptBadge}
      />
    </span>
  );

  const PostmanIcon: React.ElementType = () => (
    <span>
      <SiPostman color="#ff7140" size="large" />
    </span>
  );

  const ReactIcon: React.ElementType = () => (
    <span>
      <img width="40px" height="40px" alt="React Badge" src={reactBadge} />
    </span>
  );

  const FirbaseIcon: React.ElementType = () => (
    <span>
      <IoLogoFirebase color="#feaa1b" size="large" />
    </span>
  );

  const ViteIcon: React.ElementType = () => (
    <span>
      <SiVite color="#a659fc" size="large" />
    </span>
  );

  const projectsArray = [
    {
      projectTitle: "Pawfect Match",
      icons: [
        <MantineIcon size="50px" />,
        <ApiIcon />,
        <TypescriptIcon />,
        <PostmanIcon />,
      ],
      activeState: "Active",
      projectImg: PawfectMatchLogo,
      websiteLink: "https://kristendlr.github.io/PawfectMatch/",
      githubLink: "https://github.com/KristenDLR/PawfectMatch",
    },
    {
      projectTitle: "Note Keeper",
      icons: [<ReactIcon />, <TypescriptIcon />, <FirbaseIcon />, <ViteIcon />],
      activeState: "Development",
      projectImg: noteTaker,
      githubLink: "https://github.com/KristenDLR/note_keeper",
    },
  ];

  return (
    <Box className="section">
      <Typography sx={{ mx: "auto" }} className="sectionTitle" variant="h1">
        Projects
      </Typography>
      <Box></Box>

      <Stack
        className="projects"
        direction="row"
        justifyContent="center"
        spacing={5}
      >
        {projectsArray.map((project) => (
          <ProjectCard
            activeState={project.activeState}
            icons={project.icons}
            projectTitle={project.projectTitle}
            projectImg={project.projectImg}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            key={project.projectTitle}
          />
        ))}
      </Stack>

    </Box>
  );
};
