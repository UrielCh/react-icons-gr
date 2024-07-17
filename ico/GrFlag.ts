import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrFlag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,24 L2,2 C10,-1.5238864 13,6.64375708 22,2 L22,14 C14,18.895222 9,9.89651097 2,14"}}]})(props);
}
export default GrFlag;
