import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Clone icon from Grommet-Icons
 * @module
 */
export function GrClone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M7,23 L23,23 L23,7 L7,7 L7,23 Z M17,3.9997 L17,0.9997 L14,0.9997 M1,13.9997 L1,16.9997 L4,16.9997 M1,11.9997 L1,5.9997 L1,11.9997 Z M4,0.9997 L1,0.9997 L1,3.9997 M6,0.9997 L12,0.9997 L6,0.9997 Z"}}]})(props);
}
export default GrClone;
