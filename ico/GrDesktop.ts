import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Desktop icon from Grommet-Icons
 * @module
 */
export function GrDesktop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,1 L23,1 L23,19 L1,19 L1,1 Z M5,23 L19,23 L5,23 Z M10,19 L10,23 L10,19 Z M14,19 L14,23 L14,19 Z"}}]})(props);
}
export default GrDesktop;
