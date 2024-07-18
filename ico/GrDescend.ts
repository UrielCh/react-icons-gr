import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Descend icon from Grommet-Icons
 * @module
 */
export function GrDescend(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,8 L8,2 L14,8 M11,21 L22,21 M11,17 L19,17 M11,13 L16,13 M8,2 L8,22","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
}
export default GrDescend;
