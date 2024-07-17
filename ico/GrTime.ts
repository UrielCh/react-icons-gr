import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrTime(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M1 13H5L7.5 4L12.5 20.5L17 9L19 13H23",strokeWidth:"2"}}]})(props);
}
export default GrTime;
