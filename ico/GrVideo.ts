import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Video icon from Grommet-Icons
 * @module
 */
export function GrVideo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M15,9 L23,5 L23,19 L15,15 L15,9 Z M1,5 L15,5 L15,19 L1,19 L1,5 Z"}}]})(props);
}
export default GrVideo;
