import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LinkDown icon from Grommet-Icons
 * @module
 */
export function GrLinkDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,2 L12,22 M3,11 L12,2 L21,11","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
}
export default GrLinkDown;
