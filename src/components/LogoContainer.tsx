import React from "react";
import styled from "styled-components";

const EZTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Logo = styled.img``;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  gap: 0.5rem;

  ${Logo} {
    height: 100%;
    width: auto;
  }

  screen and (max-width: 768px) {
    height: 30px;
  }
`;

const LogoContainers = ({ logoImg }: { logoImg: string }) => (
  <LogoContainer>
    <Logo src={logoImg} alt="EZsave" />
    <EZTitle>EZsave</EZTitle>
  </LogoContainer>
);

export default LogoContainers;
