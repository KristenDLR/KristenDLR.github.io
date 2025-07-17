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
    <Card className="newCard projectCard">
      <CardMedia
        className="prjImage"
        sx={{ height: "100%", width: "100%" }}
        image={projectImg}
        title="project image"
      />

      <Box className="cardContent">
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Chip label={activeState} variant={activeState === "Active" ? "filled" : "outlined"} />
          <Typography className="cardCopy" variant="h4">
            {projectTitle}
          </Typography>
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
                sx={{ lineHeight: `100%`, justifyItems: "space-around" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="linkIcon" />
                <Typography variant="caption" sx={{ display: "block" }}>
                  Open Page
                </Typography>
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
              <Typography variant="caption" sx={{ display: "block" }}>
                Open in github
              </Typography>
            </Button>
          </Stack>
        </CardActions>
      </Box>
    </Card>
  );
};
