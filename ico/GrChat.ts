import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Chat icon from Grommet-Icons
 * @module
 */
export function GrChat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M5,1 L19,1 L19,1 C21.209139,1 23,2.790861 23,5 L23,13 L23,13 C23,15.209139 21.209139,17 19,17 L7,17 L1,22 L1,5 L1,5 C1,2.790861 2.790861,1 5,1 Z M5,7 L18,7 M5,11 L14,11","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
}
export default GrChat;
