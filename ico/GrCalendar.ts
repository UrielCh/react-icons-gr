import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Calendar icon from Grommet-Icons
 * @module
 */
export function GrCalendar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,5 L22,5 L22,22 L2,22 L2,5 Z M18,5 L18,1 M6,5 L6,1 M2,10 L22,10"}}]})(props);
}
export default GrCalendar;
