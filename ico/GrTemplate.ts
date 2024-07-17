import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrTemplate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,3 L23,3 L23,21 L1,21 L1,3 Z M1,8 L23,8 M7,8 L7,21"}}]})(props);
}
export default GrTemplate;
