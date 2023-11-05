"use client";

import { useResourceAction } from "@/state/resource/client";
import { Resource } from "@/state/resource/type";
import { useRef, useState } from "react";

export const useTextarea = (resource: Resource) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { upsertResource } = useResourceAction();
  const [textVal, setTextVal] = useState(resource.name);

  const propsForTextarea = {
    ref: textareaRef,
    value: textVal,
    readOnly: true,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      e.target.value = e.target.value.replace(/(\r\n|\n|\r)/g, " ");
      setTextVal(e.target.value);
    }, // Avoid multiline text
    onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      /^(Enter|Escape)$/.test(e.key) && e.currentTarget.blur();
    },
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
      const newResource = { ...resource, name: e.currentTarget.value };
      upsertResource(newResource);
      setTextVal(newResource.name);
      e.currentTarget.readOnly = true;
    },
  };

  return { propsForTextarea, textareaRef };
};
