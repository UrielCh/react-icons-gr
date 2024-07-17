import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrMonitor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,16 L23,16 L23,2 L1,2 L1,16 Z M5,22 L19,22 L5,22 Z M9,22 L15,22 L15,16 L9,16 L9,22 Z"}}]})(props);
}
export default GrMonitor;
