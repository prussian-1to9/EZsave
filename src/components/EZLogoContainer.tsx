import React from "react";
import styled from "styled-components";

import EZTitle from "@components/EZLogo/EZTitle";
import LogoContainer from "@components/EZLogo/LogoContainer";
import HeaderContainer from "@components/EZLogo/HeaderContainer";

const EZLogo = styled.img`
  height: 100%;
  width: auto;
`;

const EZLogoContainer = ({
  type = "main",
  theme,
}: {
  type?: string | undefined;
  theme: EZTheme;
}) => (
  <>
    {type === "header" ? (
      <HeaderContainer to="/dashboard">
        <EZLogo src={theme.logoImg} alt="EZsave" />
        <EZTitle>EZsave</EZTitle>
      </HeaderContainer>
    ) : (
      <LogoContainer to="/">
        <EZLogo src={theme.logoImg} alt="EZsave" />
        <EZTitle>EZsave</EZTitle>
      </LogoContainer>
    )}
  </>
);

export default EZLogoContainer;
