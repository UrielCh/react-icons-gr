import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Folder icon from Grommet-Icons
 * @module
 */
export function GrFolder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,10 L2,6 L2,2 L10,2 L13,6 L22,6 L22,10 L2,10 Z M2,10 L22,10 L22,22 L2,22 L2,10 Z"}}]})(props);
}
export default GrFolder;
