import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Directions icon from Grommet-Icons
 * @module
 */
export function GrDirections(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M17,11 L22,6 L17,1 M22,6 L18,6 C14.686,6 12,8.686 12,12 L12,24 M7,6 L2,11 L7,16 M2,11 L6,11 C9.314,11 12,13.686 12,17 L12,24"}}]})(props);
}
export default GrDirections;
