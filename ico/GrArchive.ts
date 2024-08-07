import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Archive icon from Grommet-Icons
 * @module
 */
export function GrArchive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M3,23 L21,23 L21,6 L3,6 L3,23 Z M9,14 L15,14 L15,10 L9,10 L9,14 Z M1,6 L23,6 L23,1 L1,1 L1,6 Z"}}]})(props);
}
export default GrArchive;
