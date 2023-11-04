"use client";

import { ResourceRegistrationBtn } from "../ResourceRegistrationBtn/ResourceRegistrationBtn.styled";
import { StyledForm, TextInput } from "./ResourceFormForUrl.styled";
import { useFormActive } from "./hooks/useFormActive";
import { useUrlResourceForm } from "./hooks/useUrlResourceForm";

const UrlAddBtn = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <ResourceRegistrationBtn {...props}>URL 추가</ResourceRegistrationBtn>
);

export const ResourceFormForURL = () => {
  const { handleFormSubmit, textInputRef } = useUrlResourceForm();
  const { isFormActive, activateForm, deactivateForm } = useFormActive();

  const propsForStyledForm = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      handleFormSubmit(e);
      deactivateForm();
    },
  };

  const propsForTextInput = {
    ref: textInputRef,
    placeholder: "https://... or http://...",
    autoFocus: true,
    autoCapitalize: "off",
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.key === "Escape" && deactivateForm();
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => {
      !e.currentTarget.value && deactivateForm();
    },
  };

  return !isFormActive ? (
    <UrlAddBtn onClick={activateForm} />
  ) : (
    <StyledForm {...propsForStyledForm}>
      <UrlAddBtn type="submit" />
      <TextInput {...propsForTextInput} />
    </StyledForm>
  );
};
