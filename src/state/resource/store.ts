import { create } from "zustand";
import { Resource } from "./type";

interface ResourceActions {
  upsertResource: (resource: Resource) => void;
  removeResource: (id: number) => void;
}

interface ResourceState {
  resourceMap: {
    [id: number]: Resource;
  };
  actions: () => ResourceActions;
}

export const useResourceStore = create<ResourceState>((set) => ({
  resourceMap: {},
  actions: () => ({
    upsertResource: (newResource: Resource) =>
      set(({ resourceMap }) =>
        !resourceMap[newResource.id]
          ? // Insert (Decending)
            {
              resourceMap: {
                [newResource.id]: newResource,
                ...resourceMap,
              },
            }
          : // Update (Inplace)
            ((resourceMap[newResource.id] = newResource), { resourceMap })
      ),

    removeResource: (id: number) =>
      set(({ resourceMap }) => {
        const { [id]: removedItem, ...rest } = resourceMap;
        return { resourceMap: rest };
      }),
  }),
}));
