import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Optimize icon from Grommet-Icons
 * @module
 */
export function GrOptimize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,22 L6,22 L6,18 L2,18 L2,22 Z M22,2 L12,12 M22,10 L22,2 L14,2 M22,13 L18,13 L18,22 L22,22 L22,13 Z M10,22 L14,22 L14,16 L10,16 L10,22 Z"}}]})(props);
}
export default GrOptimize;
