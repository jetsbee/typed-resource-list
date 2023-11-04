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
