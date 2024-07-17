import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrStatusGoodSmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 12 12"},child:[{tag:"circle",attr:{"cx":"6","cy":"6","r":"5",fillRule:"evenodd"}}]})(props);
}
export default GrStatusGoodSmall;
