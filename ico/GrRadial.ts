import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Radial icon from Grommet-Icons
 * @module
 */
export function GrRadial(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"11",fill:"none",strokeWidth:"2"}}]})(props);
}
export default GrRadial;
