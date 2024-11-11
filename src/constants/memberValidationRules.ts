import { Rule } from "antd/es/form";

const memberValidationRules: { [key: string]: Rule[] } = {
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

export { memberValidationRules };
