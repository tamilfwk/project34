// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eweqq7h9oPPXmhNg71Z2fg
// Component: LBNvwF65G3Em

import * as React from "react";

import {
  Link,
  GatsbyLinkProps as LinkProps,
  navigate as __gatsbyNavigate
} from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";

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
import Navbar from "../../Navbar"; // plasmic-import: nqp6ufvZoI04/component
import Slider from "react-slick"; // plasmic-import: HOQUyOpClJ/codeComponent
import BlogCard2 from "../../BlogCard2"; // plasmic-import: T3xw65d63J/component
import FooterSection from "../../FooterSection"; // plasmic-import: 0GG8n9BMOzpQ/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: rl4fKnBzap8m/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as projectcss from "./plasmic_revnitro.module.css"; // plasmic-import: eweqq7h9oPPXmhNg71Z2fg/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: LBNvwF65G3Em/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: va4Dbs6cN/icon
import AvatarIcon from "./icons/PlasmicIcon__Avatar"; // plasmic-import: MO5bOueWO/icon
import image63PtHnw5VI from "./images/image6.png"; // plasmic-import: 3PtHNW5vI/picture
import image7CvWCKqpn from "./images/image7.png"; // plasmic-import: CV-wCKqpn/picture

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  homeslider?: p.Flex<typeof Slider>;
  style05?: p.Flex<"div">;
  heading?: p.Flex<"div">;
  heading2?: p.Flex<"div">;
  description?: p.Flex<"div">;
  newsletter?: p.Flex<"div">;
  field?: p.Flex<"div">;
  field2?: p.Flex<"div">;
  button?: p.Flex<"div">;
  container?: p.Flex<"div">;
  label?: p.Flex<"div">;
  container2?: p.Flex<"div">;
  cards1?: p.Flex<"div">;
  content?: p.Flex<"div">;
  badgesNeutral?: p.Flex<"div">;
  title?: p.Flex<"div">;
  style04?: p.Flex<"div">;
  testimonial?: p.Flex<"div">;
  quote?: p.Flex<"div">;
  quote2?: p.Flex<"div">;
  source?: p.Flex<"div">;
  testimonial2?: p.Flex<"div">;
  quote3?: p.Flex<"div">;
  quote4?: p.Flex<"div">;
  source2?: p.Flex<"div">;
  videoContents?: p.Flex<"div">;
  contact?: p.Flex<"div">;
  heading3?: p.Flex<"div">;
  heading4?: p.Flex<"div">;
  description2?: p.Flex<"div">;
  image?: p.Flex<"div">;
  form?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultHomepageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

export function Head() {
  return (
    <>
      <meta name="twitter:card" content="summary" />
      <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
      <meta
        key="og:title"
        property="og:title"
        content={PlasmicHomepage.pageMetadata.title}
      />
      <meta
        key="twitter:title"
        name="twitter:title"
        content={PlasmicHomepage.pageMetadata.title}
      />
    </>
  );
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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

  const new$Queries = {
    query2: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "3dhK6jNsw7TnVEx2a9ccqj",
            opId: "c011c20c-3e14-495f-82c3-00b58152e8ca",
            userArgs: {},
            cacheKey: "plasmic.$.Az5mMOZW_.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              hasGap={true}
              className={classNames(projectcss.all, sty.section)}
            >
              {true ? (
                <Navbar
                  data-plasmic-name={"navbar"}
                  data-plasmic-override={overrides.navbar}
                  className={classNames("__wab_instance", sty.navbar)}
                />
              ) : null}
              <Slider
                data-plasmic-name={"homeslider"}
                data-plasmic-override={overrides.homeslider}
                autoplay={true}
                className={classNames("__wab_instance", sty.homeslider)}
                pauseOnHover={false}
              >
                {(
                  (() => {
                    try {
                      return $queries.query2.data;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })() ?? []
                ).map((currentItem, currentIndex) => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pfIcp)}
                    key={currentIndex}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__vSneo)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      src={
                        "https://static1.plasmic.app/components/react-slick/slide1.png" as const
                      }
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rf7CR
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return currentItem.Name;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </div>
                ))}
              </Slider>
              <p.Stack
                as={"div"}
                data-plasmic-name={"style05"}
                data-plasmic-override={overrides.style05}
                hasGap={true}
                className={classNames(projectcss.all, sty.style05)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"heading"}
                  data-plasmic-override={overrides.heading}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.heading)}
                >
                  <div
                    data-plasmic-name={"heading2"}
                    data-plasmic-override={overrides.heading2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.heading2
                    )}
                  >
                    {"Redefining Automobile Journalism"}
                  </div>
                  <div
                    data-plasmic-name={"description"}
                    data-plasmic-override={overrides.description}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.description
                    )}
                  >
                    {
                      "Our mission is to revolutionize automobile industry by delivering captivating and insightful content that fuels the passion of automotive enthusiasts worldwide."
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__e39OQ
                    )}
                  >
                    {"O"}
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"newsletter"}
                  data-plasmic-override={overrides.newsletter}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.newsletter)}
                >
                  <div
                    data-plasmic-name={"field"}
                    data-plasmic-override={overrides.field}
                    className={classNames(projectcss.all, sty.field)}
                  >
                    <div
                      data-plasmic-name={"field2"}
                      data-plasmic-override={overrides.field2}
                      className={classNames(projectcss.all, sty.field2)}
                    />
                  </div>
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.button)}
                  >
                    {false ? (
                      <div
                        data-plasmic-name={"container"}
                        data-plasmic-override={overrides.container}
                        className={classNames(projectcss.all, sty.container)}
                      >
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__zBnWu)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                    <div
                      data-plasmic-name={"label"}
                      data-plasmic-override={overrides.label}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.label
                      )}
                    >
                      {"SEARCH"}
                    </div>
                    {false ? (
                      <div
                        data-plasmic-name={"container2"}
                        data-plasmic-override={overrides.container2}
                        className={classNames(projectcss.all, sty.container2)}
                      >
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__aCqSl)}
                          role={"img"}
                        />
                      </div>
                    ) : null}
                  </p.Stack>
                </p.Stack>
              </p.Stack>
              <div className={classNames(projectcss.all, sty.freeBox__jCmPf)}>
                {(
                  (() => {
                    try {
                      return $queries.query2.data;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return [];
                      }
                      throw e;
                    }
                  })() ?? []
                ).map((currentItem, currentIndex) => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__bgr5H)}
                    key={currentIndex}
                  >
                    <div
                      data-plasmic-name={"cards1"}
                      data-plasmic-override={overrides.cards1}
                      className={classNames(projectcss.all, sty.cards1)}
                    >
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"content"}
                        data-plasmic-override={overrides.content}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.content)}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__wXjjA)}
                          displayHeight={"217px" as const}
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={{
                            src: image63PtHnw5VI,
                            fullWidth: 930,
                            fullHeight: 620,
                            aspectRatio: undefined
                          }}
                        />

                        <p.Stack
                          as={"div"}
                          data-plasmic-name={"badgesNeutral"}
                          data-plasmic-override={overrides.badgesNeutral}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.badgesNeutral
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__wfLqA
                            )}
                          >
                            {"BIKE"}
                          </div>
                        </p.Stack>
                        <div
                          data-plasmic-name={"title"}
                          data-plasmic-override={overrides.title}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.title
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return currentItem.Name;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "Rider Development Tips";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                        {false ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__eNhhy
                            )}
                          >
                            {
                              "This is a description of the text that is in the article as a pre screener for what you need to know."
                            }
                          </div>
                        ) : null}
                      </p.Stack>
                    </div>
                  </div>
                ))}
              </div>
              <p.Stack
                as={"div"}
                data-plasmic-name={"style04"}
                data-plasmic-override={overrides.style04}
                hasGap={true}
                className={classNames(projectcss.all, sty.style04)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"testimonial"}
                  data-plasmic-override={overrides.testimonial}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.testimonial)}
                >
                  <AvatarIcon
                    className={classNames(projectcss.all, sty.svg___08NBb)}
                    role={"img"}
                  />

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"quote"}
                    data-plasmic-override={overrides.quote}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.quote)}
                  >
                    <div
                      data-plasmic-name={"quote2"}
                      data-plasmic-override={overrides.quote2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.quote2
                      )}
                    >
                      {"Must read REVNITRO articles"}
                    </div>
                    <div
                      data-plasmic-name={"source"}
                      data-plasmic-override={overrides.source}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.source
                      )}
                    >
                      {"@madofzero"}
                    </div>
                  </p.Stack>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"testimonial2"}
                  data-plasmic-override={overrides.testimonial2}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.testimonial2)}
                >
                  <AvatarIcon
                    className={classNames(projectcss.all, sty.svg__kv0Rj)}
                    role={"img"}
                  />

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"quote3"}
                    data-plasmic-override={overrides.quote3}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.quote3)}
                  >
                    <div
                      data-plasmic-name={"quote4"}
                      data-plasmic-override={overrides.quote4}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.quote4
                      )}
                    >
                      {
                        "The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die."
                      }
                    </div>
                    <div
                      data-plasmic-name={"source2"}
                      data-plasmic-override={overrides.source2}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.source2
                      )}
                    >
                      {"@madofzero"}
                    </div>
                  </p.Stack>
                </p.Stack>
              </p.Stack>
              <div
                data-plasmic-name={"videoContents"}
                data-plasmic-override={overrides.videoContents}
                className={classNames(projectcss.all, sty.videoContents)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__ubsX)}>
                  <BlogCard2
                    className={classNames(
                      "__wab_instance",
                      sty.blogCard2___5Fb54
                    )}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__lghbg)}>
                  <BlogCard2
                    className={classNames(
                      "__wab_instance",
                      sty.blogCard2__jqYwW
                    )}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__sw6U)}>
                  <BlogCard2
                    className={classNames(
                      "__wab_instance",
                      sty.blogCard2__ma2An
                    )}
                  />
                </div>
                <div
                  className={classNames(projectcss.all, sty.freeBox___2Lpd7)}
                >
                  <BlogCard2
                    className={classNames(
                      "__wab_instance",
                      sty.blogCard2__dcay4
                    )}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__h6Fa)}>
                  <BlogCard2
                    className={classNames(
                      "__wab_instance",
                      sty.blogCard2___2Q2H9
                    )}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__xsEWm)}>
                  <BlogCard2
                    className={classNames(
                      "__wab_instance",
                      sty.blogCard2__qhRc5
                    )}
                  />
                </div>
              </div>
              <p.Stack
                as={"div"}
                data-plasmic-name={"contact"}
                data-plasmic-override={overrides.contact}
                hasGap={true}
                className={classNames(projectcss.all, sty.contact)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__e3LcG)}
                >
                  <div
                    data-plasmic-name={"heading3"}
                    data-plasmic-override={overrides.heading3}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.heading3
                    )}
                  >
                    {"Indian Racing"}
                  </div>
                  <div
                    data-plasmic-name={"heading4"}
                    data-plasmic-override={overrides.heading4}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.heading4
                    )}
                  >
                    {"LET YOUR PASSION THROTTLE"}
                  </div>
                  <div
                    data-plasmic-name={"description2"}
                    data-plasmic-override={overrides.description2}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.description2
                    )}
                  >
                    {
                      "Are you ready to rev up your engines and take the racing world by storm? The Ultimate Young Bike Racing Championships is calling out to all young riders who have a burning passion for speed, adrenaline, and the thrill of competition."
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"image"}
                  data-plasmic-override={overrides.image}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.image)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"form"}
                    data-plasmic-override={overrides.form}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.form)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__ibpp)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: image7CvWCKqpn,
                        fullWidth: 698,
                        fullHeight: 1048,
                        aspectRatio: undefined
                      }}
                    />
                  </p.Stack>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}
          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "navbar",
    "homeslider",
    "style05",
    "heading",
    "heading2",
    "description",
    "newsletter",
    "field",
    "field2",
    "button",
    "container",
    "label",
    "container2",
    "cards1",
    "content",
    "badgesNeutral",
    "title",
    "style04",
    "testimonial",
    "quote",
    "quote2",
    "source",
    "testimonial2",
    "quote3",
    "quote4",
    "source2",
    "videoContents",
    "contact",
    "heading3",
    "heading4",
    "description2",
    "image",
    "form",
    "footerSection"
  ],
  section: [
    "section",
    "navbar",
    "homeslider",
    "style05",
    "heading",
    "heading2",
    "description",
    "newsletter",
    "field",
    "field2",
    "button",
    "container",
    "label",
    "container2",
    "cards1",
    "content",
    "badgesNeutral",
    "title",
    "style04",
    "testimonial",
    "quote",
    "quote2",
    "source",
    "testimonial2",
    "quote3",
    "quote4",
    "source2",
    "videoContents",
    "contact",
    "heading3",
    "heading4",
    "description2",
    "image",
    "form"
  ],
  navbar: ["navbar"],
  homeslider: ["homeslider"],
  style05: [
    "style05",
    "heading",
    "heading2",
    "description",
    "newsletter",
    "field",
    "field2",
    "button",
    "container",
    "label",
    "container2"
  ],
  heading: ["heading", "heading2", "description"],
  heading2: ["heading2"],
  description: ["description"],
  newsletter: [
    "newsletter",
    "field",
    "field2",
    "button",
    "container",
    "label",
    "container2"
  ],
  field: ["field", "field2"],
  field2: ["field2"],
  button: ["button", "container", "label", "container2"],
  container: ["container"],
  label: ["label"],
  container2: ["container2"],
  cards1: ["cards1", "content", "badgesNeutral", "title"],
  content: ["content", "badgesNeutral", "title"],
  badgesNeutral: ["badgesNeutral"],
  title: ["title"],
  style04: [
    "style04",
    "testimonial",
    "quote",
    "quote2",
    "source",
    "testimonial2",
    "quote3",
    "quote4",
    "source2"
  ],
  testimonial: ["testimonial", "quote", "quote2", "source"],
  quote: ["quote", "quote2", "source"],
  quote2: ["quote2"],
  source: ["source"],
  testimonial2: ["testimonial2", "quote3", "quote4", "source2"],
  quote3: ["quote3", "quote4", "source2"],
  quote4: ["quote4"],
  source2: ["source2"],
  videoContents: ["videoContents"],
  contact: ["contact", "heading3", "heading4", "description2", "image", "form"],
  heading3: ["heading3"],
  heading4: ["heading4"],
  description2: ["description2"],
  image: ["image", "form"],
  form: ["form"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "div";
  navbar: typeof Navbar;
  homeslider: typeof Slider;
  style05: "div";
  heading: "div";
  heading2: "div";
  description: "div";
  newsletter: "div";
  field: "div";
  field2: "div";
  button: "div";
  container: "div";
  label: "div";
  container2: "div";
  cards1: "div";
  content: "div";
  badgesNeutral: "div";
  title: "div";
  style04: "div";
  testimonial: "div";
  quote: "div";
  quote2: "div";
  source: "div";
  testimonial2: "div";
  quote3: "div";
  quote4: "div";
  source2: "div";
  videoContents: "div";
  contact: "div";
  heading3: "div";
  heading4: "div";
  description2: "div";
  image: "div";
  form: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    navbar: makeNodeComponent("navbar"),
    homeslider: makeNodeComponent("homeslider"),
    style05: makeNodeComponent("style05"),
    heading: makeNodeComponent("heading"),
    heading2: makeNodeComponent("heading2"),
    description: makeNodeComponent("description"),
    newsletter: makeNodeComponent("newsletter"),
    field: makeNodeComponent("field"),
    field2: makeNodeComponent("field2"),
    button: makeNodeComponent("button"),
    container: makeNodeComponent("container"),
    label: makeNodeComponent("label"),
    container2: makeNodeComponent("container2"),
    cards1: makeNodeComponent("cards1"),
    content: makeNodeComponent("content"),
    badgesNeutral: makeNodeComponent("badgesNeutral"),
    title: makeNodeComponent("title"),
    style04: makeNodeComponent("style04"),
    testimonial: makeNodeComponent("testimonial"),
    quote: makeNodeComponent("quote"),
    quote2: makeNodeComponent("quote2"),
    source: makeNodeComponent("source"),
    testimonial2: makeNodeComponent("testimonial2"),
    quote3: makeNodeComponent("quote3"),
    quote4: makeNodeComponent("quote4"),
    source2: makeNodeComponent("source2"),
    videoContents: makeNodeComponent("videoContents"),
    contact: makeNodeComponent("contact"),
    heading3: makeNodeComponent("heading3"),
    heading4: makeNodeComponent("heading4"),
    description2: makeNodeComponent("description2"),
    image: makeNodeComponent("image"),
    form: makeNodeComponent("form"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Home",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
