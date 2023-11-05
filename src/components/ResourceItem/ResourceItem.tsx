import {
  ButtonWrapper,
  StyledContainer,
  StyledEditButton,
  StyledTextarea,
  StyledTrashButton,
} from "./ResourceItem.styled";
import { Props } from "./ResourceItem.type";
import { useEditButton } from "./hooks/useEditButton";
import { useTextarea } from "./hooks/useTextarea";
import { useTrashButton } from "./hooks/useTrashButton";

export const ResourceItem = (props: Props) => {
  const { textareaRef, propsForTextarea } = useTextarea(props);
  const { propsForEditButton } = useEditButton(textareaRef);
  const { handleClickTrashButton } = useTrashButton(props.id);

  return (
    <StyledContainer>
      <StyledTextarea {...propsForTextarea} />
      <ButtonWrapper>
        <StyledEditButton {...propsForEditButton} />
        <StyledTrashButton onClick={handleClickTrashButton} />
      </ButtonWrapper>
    </StyledContainer>
  );
};
