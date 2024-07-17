import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrSave(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M3,2 L3,21 L21,21 L21,3 L12,3 L12,14 M8,11 L12,15 L16,11"}}]})(props);
}
export default GrSave;
