import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Briefcase icon from Grommet-Icons
 * @module
 */
export function GrBriefcase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,6 L23,6 L23,21 L1,21 L1,6 Z M6,6 L6,21 M18,6 L18,21 M8,6 L8,3 L16,3 L16,6"}}]})(props);
}
export default GrBriefcase;
