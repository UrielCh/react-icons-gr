import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrWaypoint(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"3 11 11 13 13 21 21 3"}}]})(props);
}
export default GrWaypoint;
