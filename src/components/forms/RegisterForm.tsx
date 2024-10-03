import React, { useState } from "react";
import styled from "styled-components";
import { Rule } from "antd/es/form";
import { Form, Input, Button } from "antd";

const { Item } = Form;

const StyledForm = styled(Form)`
  width: 60%;
  max-width: 750px;
  padding: 24px;
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
    <StyledForm
      name="register"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Item name="email" rules={validationRules.email}>
        <Input placeholder="ID@ez.save" />
      </Item>
      <Item name="password" rules={validationRules.password}>
        <Input.Password placeholder="password" />
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
    </StyledForm>
  );
};

export default RegisterPage;
