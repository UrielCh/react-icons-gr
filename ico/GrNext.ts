import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Next icon from Grommet-Icons
 * @module
 */
export function GrNext(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"7 2 17 12 7 22"}}]})(props);
}
export default GrNext;
