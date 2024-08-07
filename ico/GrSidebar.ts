import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sidebar icon from Grommet-Icons
 * @module
 */
export function GrSidebar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,22 L23,22 L23,2 L1,2 L1,22 Z M16,2 L16,22 L16,2 Z"}}]})(props);
}
export default GrSidebar;
