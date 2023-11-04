"use client";

import { useAllResources } from "@/state/resource/client";
import { ResourceItem } from "../ResourceItem/ResourceItem";
import { StyledContainer } from "./ResourceList.styled";

export const ResourceList = () => {
  const resourceItems = useAllResources();

  return (
    <StyledContainer>
      {resourceItems.map((item) => (
        <ResourceItem {...item} key={item.id} />
      ))}
    </StyledContainer>
  );
};
