import React from "react";
import { Route, Routes } from "react-router-dom";

import RegisterForm from "@components/EZForm/RegisterForm";
import Container from "@components/Container";
import EZLogoContainer from "@components/EZLogoContainer";

const RegisterPage = ({ logoImg }: { logoImg: string }) => {
  return (
    <Container>
      <EZLogoContainer logoImg={logoImg} />
      <Routes>
        <Route index element={<RegisterForm />} />
      </Routes>
    </Container>
  );
};

export default RegisterPage;
