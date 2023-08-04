// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#SBBbECmt_a)"} fill={"currentColor"}>
        <path
          d={
            "M0 0h3.2v3.2H0V0zm3.2 3.2h3.2v3.2H3.2V3.2zm3.2 3.2h3.2v3.2H6.4V6.4zm3.2-3.2h3.2v3.2H9.6V3.2zM12.8 0H16v3.2h-3.2V0zM3.2 9.6h3.2v3.2H3.2V9.6zM0 12.8h3.2V16H0v-3.2z"
          }
        ></path>

        <path
          d={
            "M9.6 6.4h3.2v3.2H9.6V6.4zm3.2 0H16v3.2h-3.2V6.4zm-9.6 0h3.2v3.2H3.2V6.4zM0 6.4h3.2v3.2H0V6.4z"
          }
        ></path>

        <path d={"M6.4 9.6h3.2v3.2H6.4V9.6zm0 3.2h3.2V16H6.4v-3.2z"}></path>

        <path
          d={
            "M9.6 9.6h3.2v3.2H9.6V9.6zm3.2 3.2H16V16h-3.2v-3.2zM6.4 3.2h3.2v3.2H6.4V3.2zm0-3.2h3.2v3.2H6.4V0z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"SBBbECmt_a"}>
          <path fill={"currentColor"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
