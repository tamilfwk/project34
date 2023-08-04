// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eweqq7h9oPPXmhNg71Z2fg
// Component: 0GG8n9BMOzpQ

import * as React from "react";

import {
  Link,
  GatsbyLinkProps as LinkProps,
  navigate as __gatsbyNavigate
} from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: LqYGbQm8EcWv/component

import { useScreenVariants as useScreenVariantsirLlT7PM7C7 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: irLlT7pM-7c7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as projectcss from "./plasmic_revnitro.module.css"; // plasmic-import: eweqq7h9oPPXmhNg71Z2fg/projectcss
import * as sty from "./PlasmicFooterSection.module.css"; // plasmic-import: 0GG8n9BMOzpQ/css

import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: rl2fVbmbFcI/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: DGLp1qLb6Sy/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: O3i-JYeqiLF/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: KNsgRRkWUhy/icon
import logo7WBkad1Vh from "./images/logo.png"; // plasmic-import: 7WBkad1VH/picture

createPlasmicElementProxy;

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsirLlT7PM7C7()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fqtHl)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__mlYqF)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto" as const}
            displayMaxHeight={"35px" as const}
            displayMaxWidth={"229px" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: logo7WBkad1Vh,
              fullWidth: 181,
              fullHeight: 61,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___60Bh4
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"DRIVEN BY PASSION"}
              </span>
            </React.Fragment>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__nncIw)}>
            <FacebooksvgIcon
              className={classNames(projectcss.all, sty.svg__d951K)}
              role={"img"}
            />

            <TwittersvgIcon
              className={classNames(projectcss.all, sty.svg___9InUm)}
              role={"img"}
            />

            <InstagramsvgIcon
              className={classNames(projectcss.all, sty.svg__spejk)}
              role={"img"}
            />

            <LinkedinsvgIcon
              className={classNames(projectcss.all, sty.svg__uc3K7)}
              role={"img"}
            />
          </div>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__ed03Z)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4___1DkFy
            )}
          >
            {"Menu"}
          </h4>
          <Button
            className={classNames("__wab_instance", sty.button__oslrX)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__ybJkr)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__x9Wg6)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rLxkU
              )}
            >
              {"Blog"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__glVzd)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__vIbmw)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___9Ly1W)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3PVar
              )}
            >
              {"Forum"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__ldvql)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__iIxxg)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__hFnd)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jFfSh
              )}
            >
              {"Store"}
            </div>
          </Button>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__yPp1Z)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__a9IX2
            )}
          >
            {"Help"}
          </h4>
          <Button
            className={classNames("__wab_instance", sty.button___0D80A)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__tTIb)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___4O2GZ)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__x7Fij
              )}
            >
              {"Privacy and Policy"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__lxLed)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__b6ExP)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__p7HuR)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bDHv
              )}
            >
              {"Terms of Use"}
            </div>
          </Button>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__n4ZpV)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__onCTv
            )}
          >
            {"Company"}
          </h4>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__uzt9
            )}
          >
            {"About us"}
          </div>
        </div>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__gme3P)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__phy6G
          )}
        >
          {"Copyrights \u00a9 2023 All Rights Reserved by Revnitro"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterSection__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
