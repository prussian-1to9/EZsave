import styled from "styled-components";

import EZTitle from "@components/EZLogo/EZTitle";
import LogoContainer from "@components/EZLogo/LogoContainer";

// header container : border-bottom + 반응형 요소 제거
const HeaderContainer = styled(LogoContainer)`
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #5f5f5f;
  height: 50px;

  ${EZTitle} {
    font-size: 1.3rem;
  }
`;
export default HeaderContainer;
