import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dislike icon from Grommet-Icons
 * @module
 */
export function GrDislike(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,23 L20,23 C22,23 23,22 23,20 L23,10 L16,10 L16,4 C16,2 15,1 13,1 L11,1 C11,1 10.9842682,7 10.9842677,8.32575545 C10.9842672,9.65151089 10,11 8,11 L1,11 L1,23 Z M6,23 L6,11","transform":"rotate(180 12 12)"}}]})(props);
}
export default GrDislike;
