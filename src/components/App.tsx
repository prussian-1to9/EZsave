import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Layout, ConfigProvider, Flex } from "antd";
import { Route, Routes } from "react-router-dom";

import RegisterPage from "./forms/RegisterForm";
import LogoContainer from "./LogoContainer";
import EZsaveDark from "@assets/EZsave-dark.svg";
import EZsaveLight from "@assets/EZsave-light.svg";

// primary : buttons, links, etc.
const THEMES = {
  // colors only
  light: {
    primaryColor: "#2d2d2d",
    textBase: "#2d2d2d",
    BgBase: "#ffffff",
    logoImg: EZsaveLight,
  },
  dark: {
    primaryColor: "#5f5f5f",
    textBase: "#ffffff",
    BgBase: "#2d2d2d",
    logoImg: EZsaveDark,
  },
};

const App: React.FC = () => {
  const [theme, setTheme] = useState(THEMES.dark);

  /** @fixme should set setheme triggers */

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              primaryShadow: "none",
              fontWeight: 600,
            },
          },
          token: {
            colorPrimary: theme.primaryColor,
            colorPrimaryBg: "#22ddff",
            fontWeightStrong: 700,
            colorTextBase: theme.textBase,
            colorTextHeading: theme.textBase,
            colorBgBase: theme.BgBase,
          },
        }}
      >
        <Layout>
          <Flex
            vertical={true}
            justify="center"
            align="center"
            style={{ minHeight: "100vh" }}
          >
            <LogoContainer logoImg={theme.logoImg} />
            <Routes>
              <Route path="/" element={<RegisterPage />} />
            </Routes>
          </Flex>
        </Layout>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
