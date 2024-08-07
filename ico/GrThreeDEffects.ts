import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ThreeDEffects icon from Grommet-Icons
 * @module
 */
export function GrThreeDEffects(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"11 3 13 3 22 6 22 17 12 20.5 2 17 2 6.5 4 6 13 8.5 11 9 2 6.5"}}]})(props);
}
export default GrThreeDEffects;
