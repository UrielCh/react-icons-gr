import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FormCheckmark icon from Grommet-Icons
 * @module
 */
export function GrFormCheckmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"6 13 10.2 16.6 18 7"}}]})(props);
}
export default GrFormCheckmark;
