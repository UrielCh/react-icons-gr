import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BottomCorner icon from Grommet-Icons
 * @module
 */
export function GrBottomCorner(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"8 20 20 20 20 8"}}]})(props);
}
export default GrBottomCorner;
