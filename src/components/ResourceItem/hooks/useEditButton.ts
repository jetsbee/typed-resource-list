export const useEditButton = (ref: React.RefObject<HTMLTextAreaElement>) => {
  const propsForEditButton = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      if (ref.current) {
        const textareaEl = ref.current;
        textareaEl.readOnly = false;
        textareaEl.focus();
        textareaEl.selectionStart = textareaEl.value.length;
      }
    },
  };

  return { propsForEditButton };
};
