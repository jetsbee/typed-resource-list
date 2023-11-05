"use client";

import styled from "@emotion/styled";
import { TypedIcon } from "typed-design-system";
import { SVGTrashSmall } from "./TrashSmall.svg";

type IconProps = Omit<Parameters<typeof TypedIcon>[0], "icon">;

export const EditIcon = (props: IconProps) => (
  <TypedIcon {...props} icon="edit_19" />
);

export const CloseIcon = (props: IconProps) => (
  <TypedIcon {...props} icon="close_19" />
);

const StyledI = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
`;

export const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <StyledI>
    <SVGTrashSmall {...props} width="1em" height="1em" />
  </StyledI>
); // Mimic TypedIcon, TypedIcon에 동일한 디자인 아이콘 없음
