import styled from "styled-components";
import { media } from "@styles/media";
import { Link } from "react-router-dom";

const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  gap: 0.5rem;

  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.75;
  }
  &:visited {
    color: inherit;
  }

  ${media.tablet`
    height: 40px;
  `}
  ${media.mobile`
    height: 30px;
  `}
`;

export default LogoContainer;
