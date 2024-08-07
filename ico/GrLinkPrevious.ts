import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LinkPrevious icon from Grommet-Icons
 * @module
 */
export function GrLinkPrevious(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,12 L22,12 M13,3 L22,12 L13,21","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
}
export default GrLinkPrevious;
