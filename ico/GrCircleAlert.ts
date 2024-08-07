import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleAlert icon from Grommet-Icons
 * @module
 */
export function GrCircleAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M12 14V6m0 12v-2m0-14C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"}}]})(props);
}
export default GrCircleAlert;
