import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ascend icon from Grommet-Icons
 * @module
 */
export function GrAscend(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,8 L8,2 L14,8 M11,21 L22,21 M11,17 L19,17 M11,13 L16,13 M8,2 L8,22"}}]})(props);
}
export default GrAscend;
