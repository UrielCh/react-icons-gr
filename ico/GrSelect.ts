import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Select icon from Grommet-Icons
 * @module
 */
export function GrSelect(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M8,1 L14,1 L8,1 Z M19.188,19.472 L16,22 L12.5,17.5 L9.5,21 L7,7 L20,13.5 L15.5,15 L19.188,19.472 Z M19,4 L19,1 L16,1 M6,1 L3,1 L3,4 M3,14 L3,17 L6,17 M19,6 L19,10 L19,6 Z M3,12 L3,6 L3,12 Z"}}]})(props);
}
export default GrSelect;
