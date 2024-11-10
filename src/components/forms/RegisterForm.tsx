import React, { useState } from "react";
import styled from "styled-components";
import { Rule } from "antd/es/form";
import { Form, Button } from "antd";

import EZInput from "../EZInput";

const { Item } = Form;

const FormContainer = styled(Form)`
  width: 60%;
  max-width: 750px;
  padding: 24px 0;
`;

const validationRules: { [key: string]: Rule[] } = {
  email: [
    {
      required: true,
      message: "아이디가 입력되지 않았습니다.",
    },
    {
      type: "email",
      message: "유효한 이메일 주소를 입력하세요.",
    },
  ],
  password: [
    {
      required: true,
      message: "비밀번호가 입력되지 않았습니다.",
    },
    {
      min: 8,
      message: "비밀번호는 8자 이상이어야 합니다.",
    },
    {
      max: 16,
      message: "비밀번호는 16자 이하여야 합니다.",
    },
  ],
};

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const buttonOnclick = () => {};
  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Success:", values); /** @FIXME */
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
      <Item name="email" rules={validationRules.email}>
        <EZInput
          type="text"
          name="email"
          placeholder="ID@ez.save"
          onChange={(e) => {
            console.log(e.target.value); /** @FIXME */
          }}
        />
      </Item>
      <Item name="password" rules={validationRules.password}>
        <EZInput
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            console.log(e.target.value); /** @FIXME */
          }}
        ></EZInput>
      </Item>
      <Item>
        <Button
          onClick={buttonOnclick}
          type="primary"
          htmlType="submit"
          block={true}
          loading={loading}
        >
          로그인
        </Button>
      </Item>
    </FormContainer>
  );
};

export default RegisterPage;
