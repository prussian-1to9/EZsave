import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "@styles/media";

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: fit-content;

  background-color: ${({ theme }) => theme.bgColor ?? "#fff"};

  ${media.tablet`
    position: fixed;
    display: none;
    width: 100%;
    top: 50px;
    height: 100%;
    align-content: flex-start;

    overflow-y: scroll;
    z-index: 1;
  `}
`;
const Menu = styled(Link)`
  display: flex;
  width: 100%;
  height: 75px;
  justify-content: center;
  align-items: center;
  padding: 10px;

  border-right: 1px solid #5f5f5f;
  border-bottom: 1px solid #5f5f5f;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.fontColor ?? "#2d2d2d"};
  text-decoration: none;

  ${media.tablet`
    padding: 10px 5px;
    border-right: none;
  `}
`;

/** @FIXME : Mobile/Tablet : 메뉴바 터치 시 display 변경 */
const EZMenu = () => {
  return (
    <MenuContainer>
      <Menu to="/">내역 보기</Menu>
      <Menu to="/">예산 / 통계</Menu>
      <Menu to="/">할부 / 채무</Menu>
      <Menu to="/">계좌 관리</Menu>
      <Menu to="/">카드 관리</Menu>
      <Menu to="/">설정</Menu>
      <Menu to="/">홈</Menu>
    </MenuContainer>
  );
};

export { MenuContainer, Menu };
export default EZMenu;
