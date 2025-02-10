import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { githubBadge } from "assets";
import { ReactNode } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./project-card.component.css";

export type ProjectCardProps = {
  activeState: string;
  icons: ReactNode[];
  projectTitle: string;
  projectImg: string;
  githubLink: string;
  websiteLink?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  activeState,
  icons,
  projectTitle,
  projectImg,
  githubLink,
  websiteLink,
}) => {
  return (
    <Card className="projectCard" sx={{ width: 400, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: " #ffde9e" }}>
      <CardMedia
        sx={{ height: 140, width: "100%"  }}
        image={projectImg}
        title="project image"
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Chip label={activeState} />
        <Typography className="cardCopy" variant="h4">{projectTitle}</Typography>
        <Stack mt="10px" direction="row" spacing={1}>
          {icons.map((icon, index) => (
            <Box height="50px" key={index}>
              {icon}
            </Box>
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Stack mt="10px" direction="row" spacing={1}>
          {websiteLink ? (
            <Button
              color="success"
              variant="contained"
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="linkIcon" />
              Open Page
            </Button>
          ) : (
            <></>
          )}
          <Button
            color="success"
            variant="contained"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="40px"
              height="40px"
              className="githubButton"
              src={githubBadge}
              alt="Github"
            ></img>
            Open in github
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
