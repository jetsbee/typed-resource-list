import { create } from "zustand";
import { Resource } from "./type";

interface ResourceActions {
  upsertResource: (resource: Resource) => void;
  removeResource: (id: number) => void;
  setResourceIdInView: (id?: number) => void;
}

interface ResourceState {
  resourceMap: {
    [id: number]: Resource;
  };
  resourceIdInView?: number;
  actions: () => ResourceActions;
}

export const useResourceStore = create<ResourceState>((set) => ({
  resourceMap: {},
  resourceIdInView: undefined,
  actions: () => ({
    upsertResource: (newResource) =>
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

    removeResource: (id) =>
      set(({ resourceMap }) => {
        const { [id]: removedItem, ...rest } = resourceMap;
        if (removedItem.type === "image") {
          URL.revokeObjectURL(removedItem.data);
        }
        return { resourceMap: rest };
      }),

    setResourceIdInView: (id) => set({ resourceIdInView: id }),
  }),
}));
