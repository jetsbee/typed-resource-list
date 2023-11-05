"use client";

import { useResourceAction } from "@/state/resource/client";
import { validateImgFile } from "@/utils/imageFileValidation";
import { useRef } from "react";

export const useImageResourceForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { upsertResource } = useResourceAction();

  const formHandlers = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      (async () => {
        e.preventDefault();
        if (!!fileInputRef.current && !!fileInputRef.current.files) {
          for await (const file of fileInputRef.current.files) {
            try {
              const imgUrl = await validateImgFile(file);
              // Todo: 랜덤 딜레이, 등록 성공 확률 구현
              // Todo: 성공, 실패 토스트 구현
              upsertResource({
                id: Date.now(),
                name: file.name,
                data: imgUrl,
                type: "image",
              });
            } catch (err) {
              console.warn(err);
            }
          }
        }

        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      })();
    },
    onChange: (e: React.FormEvent<HTMLFormElement>) => {
      e.currentTarget.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
      );
    },
  };

  const handleClickButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  return { formHandlers, fileInputRef, handleClickButton };
};
