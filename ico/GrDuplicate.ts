import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Duplicate icon from Grommet-Icons
 * @module
 */
export function GrDuplicate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M4.5,17 L1,17 L1,1 L1,1 L17,1 L17,4.5 M7,7 L23,7 L23,23 L7,23 L7,7 Z M15,11 L15,19 L15,11 Z M11,15 L19,15 L11,15 Z"}}]})(props);
}
export default GrDuplicate;
