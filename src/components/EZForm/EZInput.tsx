import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => theme.fontColor ?? "#2d2d2d"};
  background-color: transparent;
  font-size: 14px;
  line-height: 1.6;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  background-color: ${({ theme }) => theme.bgColor ?? "#fff"};

  border: 1px solid #5f5f5f;
  border-radius: 6px;
  transition: all 0.2s;

  &:focus {
    box-shadow: 0 0 5px 5px #5f5f5f;
  }
`;

const StyledEyeInvisibleOutlined = styled(EyeInvisibleOutlined)`
  color: #5f5f5f;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.fontColor ?? "#2d2d2d"};
  }
`;
const StyledEyeOutlined = styled(EyeOutlined)`
  color: #5f5f5f;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.fontColor ?? "#2d2d2d"};
  }
`;

interface EZInputProps {
  type: string;
  name: string;
  placeholder: string | undefined;
  value?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

const EZInput: React.FC<EZInputProps> = ({
  type,
  name,
  placeholder = "ID@ez.save",
  value = "",
  onChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState(type);

  const StyledEyeOutlinedClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setInputType(isPasswordVisible ? "password" : "text");
  };

  return (
    <StyledInputContainer>
      <StyledInput
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === "password" &&
        (isPasswordVisible ? (
          <StyledEyeOutlined onClick={StyledEyeOutlinedClick} />
        ) : (
          <StyledEyeInvisibleOutlined onClick={StyledEyeOutlinedClick} />
        ))}
    </StyledInputContainer>
  );
};

export default EZInput;
