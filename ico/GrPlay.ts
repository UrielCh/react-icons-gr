import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrPlay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"3 22 21 12 3 2"}}]})(props);
}
export default GrPlay;
