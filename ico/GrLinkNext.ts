import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LinkNext icon from Grommet-Icons
 * @module
 */
export function GrLinkNext(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,12 L22,12 M13,3 L22,12 L13,21"}}]})(props);
}
export default GrLinkNext;
