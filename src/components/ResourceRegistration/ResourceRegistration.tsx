import { ResourceFormForURL } from "../ResourceFormForUrl/ResourceFormForUrl";
import { ResourceRegistrationBtn } from "../ResourceRegistrationBtn/ResourceRegistrationBtn.styled";
import { StyledDiv } from "./ResourceRegistration.styled";

export const ResourceRegistration = () => {
  return (
    <StyledDiv>
      <ResourceFormForURL />
      <ResourceRegistrationBtn>이미지 추가</ResourceRegistrationBtn>
    </StyledDiv>
  );
};
