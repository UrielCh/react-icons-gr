import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VolumeLow icon from Grommet-Icons
 * @module
 */
export function GrVolumeLow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,16 L15,16 C17.209139,16 19,14.209139 19,12 C19,9.790861 17.209139,8 15,8"}}]})(props);
}
export default GrVolumeLow;
