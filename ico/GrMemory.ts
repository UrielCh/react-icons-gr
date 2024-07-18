import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Memory icon from Grommet-Icons
 * @module
 */
export function GrMemory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M10 18h4m-4-4h4m-4-4h4m-4-4h4m6 12h3m-3-4h3m-3-4h3m-3-4h3M1 18h3m-3-4h3m-3-4h3M1 6h3m11 14h4a1 1 0 001-1V5a1 1 0 00-1-1h-4a1 1 0 00-1 1v14a1 1 0 001 1zM5 20h4a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v14a1 1 0 001 1z"}}]})(props);
}
export default GrMemory;
