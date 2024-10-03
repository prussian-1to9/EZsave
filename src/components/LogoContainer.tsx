import React from "react";
import styled from "styled-components";
import { Layout, Flex, Typography } from "antd";

const { Header, Content } = Layout;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const LogoContainer = ({ logoImg }: { logoImg: string }) => (
  <Flex gap="small" justify="center" align="center">
    <Logo src={logoImg} alt="EZsave" />
    <Typography.Title>EZsave</Typography.Title>
  </Flex>
);

export default LogoContainer;
