import { useResourceStore } from "./store";

export const useAllResources = () =>
  useResourceStore(({ resourceMap }) => Object.values(resourceMap));

export const useResourceAction = () =>
  useResourceStore(({ actions }) => actions());
