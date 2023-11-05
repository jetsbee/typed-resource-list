"use client";

import { ResourceRegistrationBtn } from "../ResourceRegistrationBtn/ResourceRegistrationBtn.styled";
import { useImageResourceForm } from "./hooks/useImageResourceForm";

export const ResourceFormForImage = () => {
  const { fileInputRef, formHandlers, handleClickButton } =
    useImageResourceForm();
  return (
    <form {...formHandlers}>
      <ResourceRegistrationBtn onClick={handleClickButton}>
        이미지 추가
      </ResourceRegistrationBtn>
      <input
        type="file"
        multiple
        style={{ display: "none" }}
        ref={fileInputRef}
      />
    </form>
  );
};
