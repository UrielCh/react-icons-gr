import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrCursor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"6 3 18 14 13 15 16 20.5 13 22 10 16 6 19"}}]})(props);
}
export default GrCursor;
