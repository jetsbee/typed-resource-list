"use client";

import { useResourceAction } from "@/state/resource/client";
import { useRef } from "react";

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

    const text = textInputRef.current?.value ?? "";
    // Todo: 랜덤 딜레이, 등록 성공 확률 구현
    // Todo: 성공, 실패 토스트 구현
    if (!text) {
      console.log("문자가 비었습니다.");
      return;
    }
    if (!validateUrlScheme(text)) {
      console.log("url 스킴을 확인해주세요.");
      return;
    }

    const url = convertToYoutubeEmbededUrlIfPossible(text);
    upsertResource({
      id: Date.now(),
      name: url,
      data: url,
      type: "url",
    });
  };

  return { handleFormSubmit, textInputRef };
};
