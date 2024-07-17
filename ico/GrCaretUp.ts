import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrCaretUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"22 4 12 16 2 4","transform":"matrix(1 0 0 -1 0 20)"}}]})(props);
}
export default GrCaretUp;
