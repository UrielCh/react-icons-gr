import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Drawer icon from Grommet-Icons
 * @module
 */
export function GrDrawer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,14 L6,2 L18,2 L23,14 L21,22 L3,22 L1,14 Z M1,14 L23,14"}}]})(props);
}
export default GrDrawer;
