import { StyledContainer } from "./ResourceItem.styled";
import { Resource } from "./ResourceItem.type";

export const ResourceItem = (props: Resource) => {
  return <StyledContainer>{props.name}</StyledContainer>;
};
