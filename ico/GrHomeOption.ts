import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrHomeOption(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"rect",attr:{x:"3",y:"3","width":"18","height":"18","rx":"4",strokeWidth:"2"}}]})(props);
}
export default GrHomeOption;
