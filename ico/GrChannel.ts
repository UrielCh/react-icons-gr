import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Channel icon from Grommet-Icons
 * @module
 */
export function GrChannel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,9 L22,9 L22,22 L2,22 L2,9 Z M21,2 L13,9 L11,9 L3,2"}}]})(props);
}
export default GrChannel;
