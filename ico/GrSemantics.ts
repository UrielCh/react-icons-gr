import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Semantics icon from Grommet-Icons
 * @module
 */
export function GrSemantics(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,17 L12,12 L22,17 L22,21 L12,16 L2,21 L2,17 Z M2,8 L12,3 L22,8 L22,12 L12,7 L2,12 L2,8 Z"}}]})(props);
}
export default GrSemantics;
