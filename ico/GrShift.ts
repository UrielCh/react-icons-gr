import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shift icon from Grommet-Icons
 * @module
 */
export function GrShift(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,0 L12,24 M2,12 L12,12 M22,12 L12,12 M6,8 L2,12 L6,16 M18,8 L22,12 L18,16"}}]})(props);
}
export default GrShift;
