// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AvatarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AvatarIcon(props: AvatarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"32"} cy={"32"} r={"32"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default AvatarIcon;
/* prettier-ignore-end */
