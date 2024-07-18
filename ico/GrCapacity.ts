import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Capacity icon from Grommet-Icons
 * @module
 */
export function GrCapacity(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeWidth:"2",d:"M1,19 L23,19 L23,5 L1,5 L1,19 Z M4,16 L7,16 L7,8 L4,8 L4,16 Z M10,16 L13,16 L13,8 L10,8 L10,16 Z"}}]})(props);
}
export default GrCapacity;
