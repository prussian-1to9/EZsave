import React from "react";
import { Route, Routes, useOutletContext } from "react-router-dom";

import FormContainer from "@components/Form/FormContainer";

import RegisterForm from "@components/Form/RegisterForm";
import Container from "@components/Container";
import EZLogoContainer from "@components/EZLogoContainer";

const RegisterPage = () => {
  const { theme }: { theme: EZTheme } = useOutletContext();
  return (
    <Container>
      <FormContainer>
        <EZLogoContainer theme={theme} />
        <Routes>
          <Route index element={<RegisterForm />} />
        </Routes>
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;
