import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * History icon from Grommet-Icons
 * @module
 */
export function GrHistory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,12 C1,18.075 5.925,23 12,23 C18.075,23 23,18.075 23,12 C23,5.925 18.075,1 12,1 C7.563,1 4,4 2,7.5 M1,1 L1,8 L8,8 M16,17 L12,13 L12,6"}}]})(props);
}
export default GrHistory;
