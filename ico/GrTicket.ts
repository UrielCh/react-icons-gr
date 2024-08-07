import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ticket icon from Grommet-Icons
 * @module
 */
export function GrTicket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M7,16 L17,16 L17,8 L7,8 L7,16 Z M20,12 C20,14 21,15 23,15 L23,20 L1,20 L1,15 C3,15 4,14 4,12 C4,10 3,9 1,9 L1,4 L23,4 L23,9 C21,9 20,10 20,12 Z"}}]})(props);
}
export default GrTicket;
