import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Return icon from Grommet-Icons
 * @module
 */
export function GrReturn(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M9,4 L4,9 L9,14 M18,19 L18,9 L5,9","transform":"matrix(1 0 0 -1 0 23)"}}]})(props);
}
export default GrReturn;
