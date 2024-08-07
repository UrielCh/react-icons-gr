import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Eject icon from Grommet-Icons
 * @module
 */
export function GrEject(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M21,14 L12,2 L3,14 L21,14 Z M2,22 L22,22 L22,18 L2,18 L2,22 Z"}}]})(props);
}
export default GrEject;
