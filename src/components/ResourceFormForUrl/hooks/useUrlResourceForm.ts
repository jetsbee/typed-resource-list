"use client";

import { useResourceAction } from "@/state/resource/client";
import { tryAction } from "@/utils/resourceRegistrationValidation";
import { useRef } from "react";
import toast from "react-hot-toast";

const validateUrlScheme = (url: string) => /^https?:\/\//.test(url);

const validateYoutubeOriginalUrl = (url: string) =>
  /^https:\/\/www.youtube.com\/watch\?v=/.test(url);

const convertToYoutubeEmbededUrlIfPossible = (url: string) => {
  if (!validateYoutubeOriginalUrl(url)) {
    return url;
  }

  const videoId = url.replace("https://www.youtube.com/watch?v=", "");
  return "https://www.youtube.com/embed/" + videoId;
};

export const useUrlResourceForm = () => {
  const { upsertResource } = useResourceAction();

  const textInputRef = useRef<HTMLInputElement>(null);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      const text = textInputRef.current?.value ?? "";

      if (!text) {
        return;
      }
      if (!validateUrlScheme(text)) {
        toast.error("url 스킴을 확인해주세요.");
        return;
      }

      const url = convertToYoutubeEmbededUrlIfPossible(text);

      const action = () => {
        upsertResource({
          id: Date.now(),
          name: url,
          data: url,
          type: "url",
        });
      };
      await tryAction(action);
    })();
  };

  return { handleFormSubmit, textInputRef };
};
