import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrClipboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M16,3 L21,3 L21,23 L3,23 L3,3 L3,3 L8,3 M8,1 L16,1 L16,6 L8,6 L8,1 Z"}}]})(props);
}
export default GrClipboard;
