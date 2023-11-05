"use client";

import { useResourceAction, useResourceInView } from "@/state/resource/client";
import {
  StyledCloseButton,
  StyledContainer,
  StyledP,
} from "./ResourceViewControl.styled";

export const ResourceViewControl = () => {
  const resourceInView = useResourceInView();
  const { setResourceIdInView } = useResourceAction();

  return (
    <StyledContainer>
      <StyledP>{resourceInView?.name}</StyledP>
      <StyledCloseButton onClick={() => setResourceIdInView(undefined)} />
    </StyledContainer>
  );
};
