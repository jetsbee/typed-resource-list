"use client";

import { useResourceAction } from "@/state/resource/client";

export const useLoadResourceOnViewer = (id: number) => {
  const { setResourceIdInView } = useResourceAction();

  const handleClickResourceItem = () => setResourceIdInView(id);

  return { handleClickResourceItem };
};
