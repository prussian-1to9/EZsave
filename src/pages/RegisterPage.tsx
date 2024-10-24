import React from "react";
import { Route, Routes } from "react-router-dom";

import RegisterForm from "@components/forms/RegisterForm";
import EZContainer from "@components/EZContainer";
import LogoContainer from "@components/LogoContainer";

const RegisterPage = ({ logoImg }: { logoImg: string }) => {
  return (
    <EZContainer>
      <LogoContainer logoImg={logoImg} />
      <Routes>
        <Route index element={<RegisterForm />} />
      </Routes>
    </EZContainer>
  );
};

export default RegisterPage;
