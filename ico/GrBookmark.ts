import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrBookmark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"5 1 5 22 12 17 19 22 19 1"}}]})(props);
}
export default GrBookmark;
