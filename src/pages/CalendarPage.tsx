import React from "react";
//import EZContainer from "@components/EZContainer";
import EZLogoContainer from "@components/EZLogoContainer";

import styled from "styled-components";
import { media } from "@styles/media";
import EZMenu from "@components/EZMenu/EZMenu";
import data from "../constants/Mock";

const CalendarDay = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-between;
  padding: 10px;
  border-left: 1px solid #5f5f5f;
  border-bottom: 1px solid #5f5f5f;
  font-size: 0.7rem;

  &:last-child {
    border-right: 1px solid #5f5f5f;
  }
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

const HistoryBar = styled.div`
  text-align: right;
  width: 100%;
  margin: 10px 0;
  padding: 0 1rem;
  border-radius: 0.5rem;
`;
const CalendarHistoryBar = ({
  type,
  predicted = false,
  children,
}: {
  type: "in" | "out";
  predicted?: true | false | undefined;
  children: React.ReactNode;
}) => {
  let backgroundColor = "#5f5f5f";
  const color = type === "in" ? "#3642B4" : "#CF2929";

  // background-color: opacity 20%
  if (!predicted || predicted === undefined) {
    backgroundColor = color + "33";
  }

  return (
    <HistoryBar style={{ backgroundColor: backgroundColor, color: color }}>
      {children}
    </HistoryBar>
  );
};

const CalendarPage = ({ logoImg }: { logoImg: string }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = React.useState(today);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      <EZLogoContainer logoImg={logoImg} type="header" />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <EZMenu />

        <CalendarContainer>
          {data.real.map((item) => {
            return (
              <CalendarDay key={item.date}>
                {Number(item.date.slice(-2))}
                <div>
                  {item.in > 0 && (
                    <CalendarHistoryBar type="in">
                      {formatNumber(item.in)}₩
                    </CalendarHistoryBar>
                  )}
                  {item.out > 0 && (
                    <CalendarHistoryBar type="out">
                      {formatNumber(item.out)}₩
                    </CalendarHistoryBar>
                  )}
                </div>
              </CalendarDay>
            );
          })}
        </CalendarContainer>
      </div>
    </>
  );
};

export default CalendarPage;
