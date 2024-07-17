import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrLogin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M9,15 L9,22 L22,22 L22,2 L9,2 L9,9 M18,12 L0,12 M13,7 L18,12 L13,17"}}]})(props);
}
export default GrLogin;
