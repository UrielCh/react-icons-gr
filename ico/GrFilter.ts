import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Filter icon from Grommet-Icons
 * @module
 */
export function GrFilter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"3 6 10 13 10 21 14 21 14 13 21 6 21 3 3 3"}}]})(props);
}
export default GrFilter;
