"use client";

import styled from "@emotion/styled";

export const StyledDiv = styled.div`
  background: #fff;
  box-shadow: 0rem 0.2rem 0.5rem 0rem rgba(0, 0, 0, 0.1);
  z-index: 1; // To prevent ResourceList from covering box-shadow
  height: 5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

export const StyledBtn = styled.button`
  cursor: pointer;
  width: 12.5rem;
  font-size: 1.2rem;
  color: #000;
  border-radius: 0.5rem;
  border: 0.1rem solid #e5e5e5;
  background-color: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:active {
    border-color: #b7b7b7;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
