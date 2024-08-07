import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Send icon from Grommet-Icons
 * @module
 */
export function GrSend(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M22,3 L2,11 L20.5,19 L22,3 Z M10,20.5 L13,16 M15.5,9.5 L9,14 L9.85884537,20.0119176 C9.93680292,20.5576204 10.0751625,20.5490248 10.1651297,20.009222 L11,15 L15.5,9.5 Z"}}]})(props);
}
export default GrSend;
