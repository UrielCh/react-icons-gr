import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StatusInfoSmall icon from Grommet-Icons
 * @module
 */
export function GrStatusInfoSmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 12 12"},child:[{tag:"rect",attr:{"width":"10","height":"10",x:"1",y:"1",fillRule:"evenodd","rx":"1"}}]})(props);
}
export default GrStatusInfoSmall;
