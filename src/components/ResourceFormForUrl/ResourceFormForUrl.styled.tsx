"use client";

import styled from "@emotion/styled";
import { forwardRef } from "react";

export const StyledForm = styled.form`
  position: relative;
`;

const UnstyledTextInput = forwardRef(function UnstyledTextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref?: React.Ref<HTMLInputElement>
) {
  return <input type="text" {...props} ref={ref} />;
});

const TextInputWrapper = styled.div`
  margin-top: 0.2rem;
  padding: 0.5rem;
  height: 4rem;
  width: 26rem;
  position: absolute;
  border-radius: 0.5rem;
  background-color: #fff;
  border: 0.1rem solid #e5e5e5;
  box-shadow: 0rem 0.2rem 0.5rem 0rem rgba(0, 0, 0, 0.1);
`;

const StyledTextInput = styled(UnstyledTextInput)`
  height: 100%;
  width: 100%;
  border-radius: 0.3rem;
  border: 0.1rem solid transparent;
  background-color: #f7f7f7;
  font-size: 1.2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 0.8rem;

  &:focus {
    outline: 0;
    border-color: #38a5e1;
  }
`;

export const TextInput = forwardRef(function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref?: React.Ref<HTMLInputElement>
) {
  return (
    <TextInputWrapper>
      <StyledTextInput {...props} ref={ref} />
    </TextInputWrapper>
  );
});
