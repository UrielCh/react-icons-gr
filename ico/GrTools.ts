import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrTools(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M11,2 L22,13 L17.5,17.5 L6.5,6.5 L11,2 Z M16,6 L17,5 L19,7 L18,8 M13,13 L4,22 L2,20 L11,11 M5,18 L6,19"}}]})(props);
}
export default GrTools;
