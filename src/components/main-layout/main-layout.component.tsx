import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { logoImg } from "assets";
import React, { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SectionIdEnum } from "types";
import { Footer } from "./footer/footer.component";
import "./main-layout.component.css";
import { Navigation } from "./navigation/navigation.component";

export type MainLayoutProps = {
  children: React.ReactNode;
  isScreenSmall: boolean;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  isScreenSmall,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const introRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (introRef.current) {
        const { bottom } = introRef.current.getBoundingClientRect();
        setIsSticky(bottom <= 0); 
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box height="100vh">
      <AppBar
        position="fixed"
        sx={{
          fontFamily: '"Atma", serif !important',
          background: "#fe8301",
          transition: "all 0.3s ease",
          boxShadow: isSticky ? 3 : "none",
          transform: isSticky ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink
              href={`#${SectionIdEnum.intro}`}
              offset={isScreenSmall ? "40px" : "50px"}
              className="allUnset"
            >
              <Box display="flex" alignItems="center" gap={0.5}>
                <img width="54px" height="54px" src={logoImg} alt="logo" />
                <Typography
                  className="topNav"
                  variant="h5"
                  sx={{ width: "fit-content" }}
                >
                  Kristen De La Rosa Portfolio
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation isScreenSmall={isScreenSmall} />
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Box id={SectionIdEnum.intro} ref={introRef as any} />

      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
