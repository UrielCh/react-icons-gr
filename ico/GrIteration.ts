import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Iteration icon from Grommet-Icons
 * @module
 */
export function GrIteration(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,9 L1,23 L15,23 M5,5 L5,19 L19,19 M9,15 L23,15 L23,1 L9,1 L9,15 L9,15 L9,15 Z"}}]})(props);
}
export default GrIteration;
