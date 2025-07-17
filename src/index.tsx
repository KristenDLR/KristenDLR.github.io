import React from "react";
import ReactDOM from "react-dom/client";
import { Maine } from "main";
import "./index.css";
import {  ThemeProvider } from "@mui/material";
import { theme } from "theme";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Maine />
    </ThemeProvider>
  </React.StrictMode>
);
