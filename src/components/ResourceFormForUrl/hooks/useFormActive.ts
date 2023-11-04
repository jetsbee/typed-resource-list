"use client";

import { useState } from "react";

export const useFormActive = () => {
  const [isFormActive, setIsFormActive] = useState(false);

  const activateForm = () => setIsFormActive(true);
  const deactivateForm = () => setIsFormActive(false);

  return { isFormActive, activateForm, deactivateForm };
};
