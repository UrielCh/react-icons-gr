import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Css3 icon from Grommet-Icons
 * @module
 */
export function GrCss3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7,3 L21,3 L18,18 L10,22 L3,18 L4,14 M5,9 L19,9"}}]})(props);
}
export default GrCss3;
