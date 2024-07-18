import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Impact icon from Grommet-Icons
 * @module
 */
export function GrImpact(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M13,2 L22,6 L22,17 L13,22 L13,2 Z M22,6 L13,11 L22,6 Z M9,22 L9,2 L9,22 Z M9,12 L3,5 L9,12 Z M9,12 L1,12 L9,12 Z M9,12 L3,19 L9,12 Z"}}]})(props);
}
export default GrImpact;
