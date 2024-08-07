import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StarHalf icon from Grommet-Icons
 * @module
 */
export function GrStarHalf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none",fillRule:"evenodd"},child:[{tag:"polygon",attr:{"fillOpacity":".2","points":"12 16.667 12 2 14.5 9.5 22 9.5 16 14 19 22"}},{tag:"polygon",attr:{"points":"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2"},child:[]}]}]})(props);
}
export default GrStarHalf;
