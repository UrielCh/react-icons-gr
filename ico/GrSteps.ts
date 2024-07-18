import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Steps icon from Grommet-Icons
 * @module
 */
export function GrSteps(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"16 6 11 6 11 11 6 11 6 16 1 16 1 23 23 23 23 1 16 1"}}]})(props);
}
export default GrSteps;
