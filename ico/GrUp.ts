import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Up icon from Grommet-Icons
 * @module
 */
export function GrUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"7.086 1.174 17.086 11.174 7.086 21.174","transform":"rotate(-89 12.086 11.174)"}}]})(props);
}
export default GrUp;
