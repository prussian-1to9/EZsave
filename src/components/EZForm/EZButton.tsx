import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const EZButton = styled(Button)`
  background-color: ${({ theme }) => theme.fontColor ?? "#2d2d2d"};
  color: ${({ theme }) => theme.bgColor ?? "#2d2d2d"};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.bgColor ?? "#2d2d2d"};
  }
`;

export default EZButton;
