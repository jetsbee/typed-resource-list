"use client";

import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100%;
`;

export const StyledIframe = styled.iframe`
  flex-grow: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

const ResourceImage = styled(Image)`
  object-fit: contain;
`;

export const StyledImage = (props: ImageProps) => (
  <ImageWrapper>
    <ResourceImage {...props} />
  </ImageWrapper>
);
