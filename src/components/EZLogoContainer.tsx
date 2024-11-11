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
  logoImg,
  type = "main",
}: {
  logoImg: string;
  type?: string | undefined;
}) => (
  <>
    {type === "header" ? (
      <HeaderContainer to="/dashboard">
        <EZLogo src={logoImg} alt="EZsave" />
        <EZTitle>EZsave</EZTitle>
      </HeaderContainer>
    ) : (
      <LogoContainer to="/">
        <EZLogo src={logoImg} alt="EZsave" />
        <EZTitle>EZsave</EZTitle>
      </LogoContainer>
    )}
  </>
);

export default EZLogoContainer;
