import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Previous icon from Grommet-Icons
 * @module
 */
export function GrPrevious(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"7 2 17 12 7 22","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
}
export default GrPrevious;
