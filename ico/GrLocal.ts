import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Local icon from Grommet-Icons
 * @module
 */
export function GrLocal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M11,8 L23,8 M1,16 L23,16 M1,12 L23,12 M11,4 L11,12"}}]})(props);
}
export default GrLocal;
