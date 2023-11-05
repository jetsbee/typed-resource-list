import { useResourceAction } from "@/state/resource/client";

export const useTrashButton = (id: number) => {
  const { removeResource } = useResourceAction();
  const handleClickTrashButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    removeResource(id);
  };

  return { handleClickTrashButton };
};
