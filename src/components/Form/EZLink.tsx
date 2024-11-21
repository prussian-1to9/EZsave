import styled from "styled-components";
import { Link } from "react-router-dom";

const EZLink = styled(Link)`
  color: ${({ theme }) => theme.fontColor ?? "#2d2d2d"};

  &:visited {
    font-decoration: none;
  }
`;

export default EZLink;
