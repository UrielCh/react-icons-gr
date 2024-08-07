import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tree icon from Grommet-Icons
 * @module
 */
export function GrTree(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M4,1 L10,1 L10,7 L4,7 L4,1 Z M16,11 L20,11 L20,15 L16,15 L16,11 Z M16,19 L20,19 L20,23 L16,23 L16,19 Z M7,7 L7,21 L16,21 M7,13 L16,13"}}]})(props);
}
export default GrTree;
