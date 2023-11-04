import { StyledContainer } from "./ResourceItem.styled";
import { Props } from "./ResourceItem.type";

export const ResourceItem = (props: Props) => {
  return <StyledContainer>{props.name}</StyledContainer>;
};
