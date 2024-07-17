import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrPlug(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M15 6V1m-3 23v-9M9 6V1M6 6h12v7a2 2 0 01-2 2H8a2 2 0 01-2-2V6z"}}]})(props);
}
export default GrPlug;
