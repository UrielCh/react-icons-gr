import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Projects icon from Grommet-Icons
 * @module
 */
export function GrProjects(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"}}]})(props);
}
export default GrProjects;
