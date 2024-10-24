import styled from "styled-components";

export const EZContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 85%;
  max-width: 400px;
  min-height: 100vh;
  margin: 0 auto;
  color: ${(props) => props.theme.fontColor};
`;

export default EZContainer;