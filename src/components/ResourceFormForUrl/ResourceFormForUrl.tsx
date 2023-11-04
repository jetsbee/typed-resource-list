"use client";

import { useState } from "react";
import { ResourceRegistrationBtn } from "../ResourceRegistrationBtn/ResourceRegistrationBtn.styled";
import { StyledForm, TextInput } from "./ResourceFormForUrl.styled";
import { useUrlResourceForm } from "./hooks/useUrlResourceForm";

const UrlAddBtn = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <ResourceRegistrationBtn {...props}>URL 추가</ResourceRegistrationBtn>
);

export const ResourceFormForURL = () => {
  const [isActive, setIsActive] = useState(false);
  const { handleFormSubmit, textInputRef } = useUrlResourceForm();

  const activateForm = () => setIsActive(true);
  const handleStyledFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleFormSubmit(e);
    setIsActive(false); // deactivate form
  };

  return !isActive ? (
    <UrlAddBtn onClick={activateForm} />
  ) : (
    <StyledForm onSubmit={handleStyledFormSubmit}>
      <UrlAddBtn type="submit" />
      <TextInput
        ref={textInputRef}
        onKeyDown={(e) => e.key === "Escape" && setIsActive(false)}
        placeholder="https://... or http://..."
        autoFocus
        autoCapitalize="off"
      />
    </StyledForm>
  );
};
