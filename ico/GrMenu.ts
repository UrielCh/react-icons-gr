import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Menu icon from Grommet-Icons
 * @module
 */
export function GrMenu(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,19 L22,19 M2,5 L22,5 M2,12 L22,12"}}]})(props);
}
export default GrMenu;
