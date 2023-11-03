import { ResourceViewControl } from "../ResourceViewControl/ResourceViewControl";
import { StyledContainer } from "./ResourceView.styled";

export const ResourceView = () => {
  return (
    <StyledContainer>
      <ResourceViewControl />
      <p>ResourceView</p>
    </StyledContainer>
  );
};
