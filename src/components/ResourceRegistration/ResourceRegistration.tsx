import { ResourceFormForImage } from "../ResourceFormForImage/ResourceFormForImage";
import { ResourceFormForURL } from "../ResourceFormForUrl/ResourceFormForUrl";
import { StyledDiv } from "./ResourceRegistration.styled";

export const ResourceRegistration = () => {
  return (
    <StyledDiv>
      <ResourceFormForURL />
      <ResourceFormForImage />
    </StyledDiv>
  );
};
