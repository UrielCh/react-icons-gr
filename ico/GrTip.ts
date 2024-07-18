import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tip icon from Grommet-Icons
 * @module
 */
export function GrTip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M16.0073529,18 L22,18 L22,2 L2,2 L2,18 L8.24264706,18 L12.125,22 L16.0073529,18 Z"}}]})(props);
}
export default GrTip;
