import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";

import useViewPort from "./Viewport";
import "@styles/App.css";

import THEMES from "../constants/themes";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
  }
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState(THEMES.dark);
  const { isMobile } = useViewPort();

  /** @fixme should set setheme triggers */

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet context={{ theme }} />
    </ThemeProvider>
  );
};

export default App;
