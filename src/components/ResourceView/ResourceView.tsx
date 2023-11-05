"use client";

import { useResourceInView } from "@/state/resource/client";
import { ResourceViewControl } from "../ResourceViewControl/ResourceViewControl";
import {
  StyledContainer,
  StyledIframe,
  StyledImage,
} from "./ResourceView.styled";

export const ResourceView = () => {
  const resourceInView = useResourceInView();

  return (
    resourceInView && (
      <StyledContainer>
        <ResourceViewControl />
        {resourceInView.type === "url" ? (
          <StyledIframe src={resourceInView.data}></StyledIframe>
        ) : resourceInView.type === "image" ? (
          <StyledImage
            src={resourceInView.data}
            alt={resourceInView.name}
            fill={true}
            style={{ objectFit: "contain" }}
          ></StyledImage>
        ) : null}
      </StyledContainer>
    )
  );
};
