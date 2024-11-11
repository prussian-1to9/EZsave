import React from "react";
import { Route, Routes } from "react-router-dom";

import RegisterForm from "@components/EZForm/RegisterForm";
import EZContainer from "@components/EZContainer";
import EZLogoContainer from "@components/EZLogoContainer";

const RegisterPage = ({ logoImg }: { logoImg: string }) => {
  return (
    <EZContainer>
      <EZLogoContainer logoImg={logoImg} />
      <Routes>
        <Route index element={<RegisterForm />} />
      </Routes>
    </EZContainer>
  );
};

export default RegisterPage;
