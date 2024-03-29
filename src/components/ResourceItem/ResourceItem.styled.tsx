"use client";

import styled from "@emotion/styled";
import { EditIcon, TrashIcon } from "../Icon/Icon.styled";

export const StyledContainer = styled.div`
  background-color: #fff;
  flex-shrink: 0;
  height: 9rem;
  border-radius: 1rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  border-radius: 3px;
  border: 0.1rem solid transparent;
  margin-top: 0.4rem;
  margin-right: 0.6rem;
  margin-left: 0.4rem;
  padding-top: 0.8rem;
  padding-right: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 0.8rem;

  &:focus {
    outline: 0;
    border-color: #38a5e1;
    background-color: #f7f7f7;
  }

  &:read-only {
    &:focus {
      border-color: #e5e5e5;
      background-color: #fff;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
  margin-right: 1.2rem;
  margin-bottom: 1.2rem;
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

const StyledEditIcon = styled(EditIcon)`
  font-size: 1.9rem; // ref. https://www.npmjs.com/package/typed-design-system#hot-to-use
  path {
    transform-origin: center;
    transform: scale(
      ${(15.09 / 12.04).toFixed(4)}
    ); // (15.09/12.04) (가로기준) or (15.07/12.03) (세로기준)
  } // Same as figma design
`;

const StyledTranshIcon = styled(TrashIcon)`
  font-size: 1.9rem;
`;

export const StyledEditButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <StyledBtn {...props}>
    <StyledEditIcon />
  </StyledBtn>
);

export const StyledTrashButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <StyledBtn {...props}>
    <StyledTranshIcon />
  </StyledBtn>
);
