import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Erase icon from Grommet-Icons
 * @module
 */
export function GrErase(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M7,21 L22,6 L18,2 L2,18 L5,21 L19,21 M6,14 L10,18"}}]})(props);
}
export default GrErase;
