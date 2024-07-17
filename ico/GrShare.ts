import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrShare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M19,13 L19,23 L1,23 L1,5 L1,5 L11,5 M14,1 L23,1 L23,10 M10,14 L22.9999998,1 L10,14 Z"}}]})(props);
}
export default GrShare;
