import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ThreeD icon from Grommet-Icons
 * @module
 */
export function GrThreeD(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,5.5 L2,18.5 L12,22.5 L22,18.5 L22,5.5 L12,1.5 L2,5.5 Z M13,12 L18,12 L18,17 M2,5.5 L12,9.5 L22,5.5 M6,14 C6,14 12,20.5 18,12"}}]})(props);
}
export default GrThreeD;
