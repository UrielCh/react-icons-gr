import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Trigger icon from Grommet-Icons
 * @module
 */
export function GrTrigger(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"4 14 10 14 7 23 9 23 20 9 14 9 18 1 7 1"}}]})(props);
}
export default GrTrigger;
