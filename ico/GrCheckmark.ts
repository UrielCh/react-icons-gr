import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Checkmark icon from Grommet-Icons
 * @module
 */
export function GrCheckmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"2 14 9 20 22 4"}}]})(props);
}
export default GrCheckmark;
