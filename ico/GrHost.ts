import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Host icon from Grommet-Icons
 * @module
 */
export function GrHost(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M17,4 L18,4 L18,5 L17,5 L17,4 Z M3,1 L21,1 L21,23 L3,23 L3,1 Z M3,13 L21,13 L3,13 Z M3,18 L21,18 L3,18 Z M3,8 L21,8 L3,8 Z"}}]})(props);
}
export default GrHost;
