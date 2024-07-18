import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FolderOpen icon from Grommet-Icons
 * @module
 */
export function GrFolderOpen(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M5,2 L11,1.99999998 L13,6 L19,6 L19,10 L5,10 L5,2 Z M2,10 L22,10 L19,22 L5,22 L2,10 Z"}}]})(props);
}
export default GrFolderOpen;
