import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Multiple icon from Grommet-Icons
 * @module
 */
export function GrMultiple(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M19,15 L23,15 L23,1 L9,1 L9,5 M15,19 L19,19 L19,5 L5,5 L5,9 M1,23 L15,23 L15,9 L1,9 L1,23 L1,23 L1,23 Z"}}]})(props);
}
export default GrMultiple;
