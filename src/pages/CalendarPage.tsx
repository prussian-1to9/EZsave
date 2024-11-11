import React from "react";
//import EZContainer from "@components/EZContainer";
import EZLogoContainer from "@components/EZLogoContainer";

import moment from "moment";
import styled from "styled-components";
import { media } from "@styles/media";
import EZMenu from "@components/EZMenu/EZMenu";

const CalendarDay = styled.div`
  display: flex;
  height: 150px;
  justify-content: flex-start;
  padding: 10px;
  border-right: 1px solid #5f5f5f;
  border-bottom: 1px solid #5f5f5f;
  font-size: 0.7rem;

  ${media.tablet`
    width: 100%;
    min-height: 75px;
    padding: 10px 5px;
    border-right: none;
  `}
`;

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-auto-flow: row;
  width: calc(100% - 300px);
  height: 100%;
  background-color: ${({ theme }) => theme.bgColor ?? "#fff"};

  ${media.tablet`
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    width: 100%;
    top: 50px;
  `}
`;

const CalendarPage = ({ logoImg }: { logoImg: string }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = React.useState(today);

  // 이번 달 모든 일자 배열로 만들기
  /** @FIXME : BE API로 날짜, 내역 불러올 수 있도록 */
  const getDaysArray = (year: number, month: number) => {
    const daysInMonth = moment(`${year}-${month}`, "YYYY-MM").daysInMonth();
    const arr = [];
    for (let i = 1; i <= daysInMonth; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <>
      <EZLogoContainer logoImg={logoImg} type="header" />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <EZMenu />

        <CalendarContainer>
          {getDaysArray(
            selectedDate.getFullYear(),
            selectedDate.getMonth() + 1
          ).map((day) => (
            <CalendarDay key={day}>{day}</CalendarDay>
          ))}
        </CalendarContainer>
      </div>
    </>
  );
};

export default CalendarPage;
