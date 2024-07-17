import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrDevice(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M2,7 L22,7 L22,21 L16,21 L12,17 L8,21 L2,21 L2,7 Z M6,2 L11,7 L12,7 L13,7 L18,2"}}]})(props);
}
export default GrDevice;
