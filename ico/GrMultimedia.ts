import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Multimedia icon from Grommet-Icons
 * @module
 */
export function GrMultimedia(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M2,8 L2,22 L22,22 L22,9 M11,4 L7,8 M2,4 L2,8 L17,8 L21,4 L2,4 Z M16,4 L12,8"}}]})(props);
}
export default GrMultimedia;
