import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PauseFill icon from Grommet-Icons
 * @module
 */
export function GrPauseFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M3,21 L9,21 L9,3 L3,3 L3,21 Z M4,19 L8,19 L8,5 L4,5 L4,19 Z M5,17 L7,17 L7,7 L5,7 L5,17 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z M16,19 L20,19 L20,5 L16,5 L16,19 Z M17,17 L19,17 L19,7 L17,7 L17,17 Z"}}]})(props);
}
export default GrPauseFill;
