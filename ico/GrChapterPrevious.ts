import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrChapterPrevious(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M23,3.5 L23,20 L14,14 L14,20 L3,12 L14,4 L14,10 L23,3.5 Z M2,2 L2,22 L2,2 Z"}}]})(props);
}
export default GrChapterPrevious;
