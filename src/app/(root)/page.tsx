"use client";

import { ResourceList } from "@/components/ResourceList/ResourceList";
import { ResourceRegistration } from "@/components/ResourceRegistration/ResourceRegistration";
import { ResourceView } from "@/components/ResourceView/ResourceView";
import { Toaster } from "react-hot-toast";
import {
  StyledListContainer,
  StyledMain,
  StyledViewerContainer,
} from "./page.styled";

export default function Home() {
  return (
    <StyledMain>
      <Toaster />
      <StyledListContainer>
        <ResourceRegistration />
        <ResourceList />
      </StyledListContainer>
      <StyledViewerContainer>
        <ResourceView />
      </StyledViewerContainer>
    </StyledMain>
  );
}
