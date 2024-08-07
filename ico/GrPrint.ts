import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Print icon from Grommet-Icons
 * @module
 */
export function GrPrint(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M6,19 L1,19 L1,7 L23,7 L23,19 L18,19 M3,16 L21,16 M6,16 L6,23 L6,23 L18,23 L18,16 M18,7 L18,1 L6,1 L6,7 L6,7 M17,12 L19,12 L19,11 L17,11 L17,12 Z"}}]})(props);
}
export default GrPrint;
