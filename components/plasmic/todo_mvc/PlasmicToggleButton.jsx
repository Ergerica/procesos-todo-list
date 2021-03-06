// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vvEKhV4X4yWCLXhriishBU
// Component: Vy5Rjsc6yec_k
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_todo_mvc.module.css"; // plasmic-import: vvEKhV4X4yWCLXhriishBU/projectcss
import * as sty from "./PlasmicToggleButton.module.css"; // plasmic-import: Vy5Rjsc6yec_k/css

export const PlasmicToggleButton__VariantProps = new Array("state");

export const PlasmicToggleButton__ArgProps = new Array("children");

function PlasmicToggleButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__state_selected]: hasVariant(variants, "state", "selected")
      })}
    >
      <p.PlasmicSlot
        defaultContents={"All"}
        value={args.children}
        className={classNames(sty.slotChildren, {
          [sty.slotChildren__state_selected]: hasVariant(
            variants,
            "state",
            "selected"
          )
        })}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicToggleButton__ArgProps,
      internalVariantPropNames: PlasmicToggleButton__VariantProps
    });

    return PlasmicToggleButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicToggleButton";
  } else {
    func.displayName = `PlasmicToggleButton.${nodeName}`;
  }
  return func;
}

export const PlasmicToggleButton = Object.assign(
  // Top-level PlasmicToggleButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicToggleButton
    internalVariantProps: PlasmicToggleButton__VariantProps,
    internalArgProps: PlasmicToggleButton__ArgProps
  }
);

export default PlasmicToggleButton;
/* prettier-ignore-end */
