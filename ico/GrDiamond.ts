import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Diamond icon from Grommet-Icons
 * @module
 */
export function GrDiamond(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M6,3 L18,3 L22,9 L12,21 L2,9 L6,3 Z M2,9 L22,9 M11,3 L7,9 L12,20 M13,3 L17,9 L12,20"}}]})(props);
}
export default GrDiamond;
