import React from "react";
import EZContainer from "@components/EZContainer";
import EZLogoContainer from "@components/EZLogoContainer";

const CalendarPage = ({ logoImg }: { logoImg: string }) => {
  return (
    <>
      <EZLogoContainer logoImg={logoImg} type="header" />
    </>
  );
};

export default CalendarPage;
