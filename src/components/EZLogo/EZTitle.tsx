import styled from "styled-components";
import { media } from "@styles/media";

const EZTitle = styled.h1`
  font-size: 1.7rem;
  margin: 0;

  ${media.tablet`
    font-size: 1.5rem;
  `}
  ${media.mobile`
    font-size: 1.3rem;
  `}
`;

export default EZTitle;
