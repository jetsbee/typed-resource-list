import { useResourceAction } from "@/state/resource/client";

export const useTrashButton = (id: number) => {
  const { removeResource } = useResourceAction();
  const handleClickTrashButton = () => {
    removeResource(id);
  };

  return { handleClickTrashButton };
};
