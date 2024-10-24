import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Route, Routes } from "react-router-dom";

import useViewPort from "./Viewport";

import THEMES from "../constants/themes";

import RegisterPage from "../pages/RegisterPage";

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
      <Routes>
        <Route path="/" element={<RegisterPage logoImg={theme.logoImg} />} />
        <Route
          path="/dashboard"
          element={<div>Dashboard main - calendar</div>}
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
