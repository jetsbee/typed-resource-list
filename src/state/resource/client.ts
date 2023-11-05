import { useResourceStore } from "./store";

export const useAllResources = () =>
  useResourceStore(({ resourceMap }) => Object.values(resourceMap));

export const useResourceInView = () =>
  useResourceStore(({ resourceMap, resourceIdInView }) => {
    if (resourceIdInView === undefined) return;
    return resourceMap[resourceIdInView];
  });

export const useResourceAction = () =>
  useResourceStore(({ actions }) => actions());
