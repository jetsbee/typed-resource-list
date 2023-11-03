"use client";
import { getBaboonImgFile } from "@/utils/mocks/getBaboonImgFile";
import { useEffect, useState } from "react";
import { ResourceItem } from "../ResourceItem/ResourceItem";
import { Resource } from "../ResourceItem/ResourceItem.type";
import { StyledContainer } from "./ResourceList.styled";

export const ResourceList = () => {
  const [baboonImg, setBaboonImg] = useState<File>();
  const [baboonImgUrl, setBaboonImgUrl] = useState("");

  useEffect(() => {
    (async () => {
      const baboonImgFile = await getBaboonImgFile();
      setBaboonImg(baboonImgFile);
    })();
  }, []);

  useEffect(() => {
    baboonImg && setBaboonImgUrl(window.URL.createObjectURL(baboonImg));
  }, [baboonImg]);

  useEffect(() => {
    return function cleanUp() {
      window.URL.revokeObjectURL(baboonImgUrl);
    };
  }, [baboonImgUrl]);

  const resourceItems: Resource[] = [
    {
      id: 7,
      name: "URL 7",
      data: "https://d.com",
      type: "url",
    },
    {
      id: 6,
      name: "URL 6",
      data: "https://c.com",
      type: "url",
    },
    {
      id: 5,
      name: "URL 5",
      data: "https://b.com",
      type: "url",
    },
    {
      id: 4,
      name: "URL 4",
      data: "https://a.com",
      type: "url",
    },
    {
      id: 3,
      name: "Image 1(Baboon)",
      data: baboonImgUrl,
      type: "image",
    },
    {
      id: 2,
      name: "URL 3",
      data: "https://google.com",
      type: "url",
    },
    {
      id: 1,
      name: "URL 2",
      data: "https://www.robinwieruch.de/react-libraries/",
      type: "url",
    },
    {
      id: 0,
      name: "URL 1",
      data: "https://typed.do/blog-kr/how-to-make-good-usability-product/",
      type: "url",
    },
  ];

  return (
    <StyledContainer>
      {resourceItems.map((item) => (
        <ResourceItem {...item} key={item.id} />
      ))}
    </StyledContainer>
  );
};
