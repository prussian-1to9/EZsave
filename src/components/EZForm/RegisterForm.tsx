import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { memberValidationRules } from "../../constants/memberValidationRules";
import EZInput from "./EZInput";
import EZButton from "./EZButton";
import EZLink from "./EZLink";

const FormContainer = styled(Form)`
  width: 80%;
  max-width: 750px;
  padding: 24px 0;
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
const LinkSeperateBar = styled.div`
  &::before {
    content: "|";
    color: ${({ theme }) => theme.fontColor ?? "#2d2d2d"};
  }
  margin: 0 8px;
`;

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const buttonOnclick = () => {};
  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Success:", values); /** @FIXME add BE check & login */
    navigate("/dashboard");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo); /** @FIXME */
  };

  return (
    <FormContainer
      name="register"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="email" rules={memberValidationRules.email}>
        <EZInput
          type="text"
          name="email"
          placeholder="ID@ez.save"
          onChange={(e) => {
            console.log(e.target.value); /** @FIXME */
          }}
        />
      </Form.Item>
      <Form.Item name="password" rules={memberValidationRules.password}>
        <EZInput
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            console.log(e.target.value); /** @FIXME */
          }}
        ></EZInput>
      </Form.Item>
      <Form.Item>
        <EZButton
          onClick={buttonOnclick}
          type="default"
          htmlType="submit"
          block={true}
          loading={loading}
        >
          로그인
        </EZButton>
      </Form.Item>
      <LinkContainer>
        <EZLink to="/register">회원가입</EZLink>
        <LinkSeperateBar />
        <EZLink to="/find">ID/PW 찾기</EZLink>
      </LinkContainer>
    </FormContainer>
  );
};

export default RegisterPage;
