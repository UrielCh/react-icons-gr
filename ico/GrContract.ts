import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Contract icon from Grommet-Icons
 * @module
 */
export function GrContract(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,14 L10,14 L10,22 M1,23 L10,14 M23,1 L14,10 M22,10 L14,10 L14,2"}}]})(props);
}
export default GrContract;
