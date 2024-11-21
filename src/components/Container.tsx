import styled from "styled-components";
import { media } from "@styles/media";

export const Container = styled.div`
  width: 100%;
  max-width: 840px;
  margin: 0 auto;

  ${media.tablet`
    padding: 0 calc(14px * 5);
  `}

  ${media.mobile`
    padding: 0 calc(14px * 2);
  `}
  color: ${(props) => props.theme.fontColor};
`;

export default Container;