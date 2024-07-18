import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TopCorner icon from Grommet-Icons
 * @module
 */
export function GrTopCorner(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"4 16 16 16 16 4","transform":"rotate(180 10 10)"}}]})(props);
}
export default GrTopCorner;
