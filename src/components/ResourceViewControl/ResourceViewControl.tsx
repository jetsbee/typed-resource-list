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
  <StyledP>{resourceInView?.name}</StyledP>;
  return (
    <StyledContainer>
      <StyledP>
        {resourceInView?.type === "url"
          ? resourceInView.data
          : resourceInView?.type === "image"
          ? resourceInView.name
          : null}
      </StyledP>
      <StyledCloseButton onClick={() => setResourceIdInView(undefined)} />
    </StyledContainer>
  );
};
