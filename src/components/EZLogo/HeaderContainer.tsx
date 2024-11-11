import styled from "styled-components";

import EZTitle from "@components/EZLogo/EZTitle";
import LogoContainer from "@components/EZLogo/LogoContainer";
import { media } from "@styles/media";

// header container : border-bottom + 반응형 요소 제거
const HeaderContainer = styled(LogoContainer)`
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #5f5f5f;
  height: 50px;
  width: 100%;

  ${EZTitle} {
    font-size: 1.3rem;
  }
  ${media.tablet`
    position: fixed;
    z-index: 1;
  `}
`;
export default HeaderContainer;
