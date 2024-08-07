import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pan icon from Grommet-Icons
 * @module
 */
export function GrPan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M8.5,5.5 L12,2 L15.5,5.5 M22,12 L2,12 M5.5,8.5 L2,12 L5.5,15.5 M18.5,15.5 L22,12 L18.5,8.5 M12,22 L12,2 M8.5,18.5 L12,22 L15.5,18.5"}}]})(props);
}
export default GrPan;
