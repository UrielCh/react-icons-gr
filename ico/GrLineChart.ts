import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrLineChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,16 L8,9 L13,14 L23,4 M0,22 L23.999,22 M16,4 L23,4 L23,11"}}]})(props);
}
export default GrLineChart;
