"use client";

import styled from "@emotion/styled";
import { CloseIcon } from "../Icon/Icon.styled";

export const StyledContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  line-height: normal;
  height: 5rem;
  padding-top: 1.6rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1.7rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const StyledBtn = styled.button`
  width: 1.9rem;
  height: 1.9rem;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:active {
    transform-origin: center;
    transform: scale(1.05);
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  font-size: 1.9rem; // ref. https://www.npmjs.com/package/typed-design-system#hot-to-use
  path {
    transform-origin: center;
    transform: scale(${(11.1 / 11.13).toFixed(4)});
  } // Same as figma design
`;

export const StyledCloseButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <StyledBtn {...props}>
    <StyledCloseIcon />
  </StyledBtn>
);
