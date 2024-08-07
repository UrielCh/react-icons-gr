import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChatOption icon from Grommet-Icons
 * @module
 */
export function GrChatOption(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M9,7 L9,1 L23,1 L23,11 L20,11 L20,16 L15,12 M1,7 L15,7 L15,18 L9,18 L4,22 L4,18 L1,18 L1,7 Z"}}]})(props);
}
export default GrChatOption;
