import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FormFilter icon from Grommet-Icons
 * @module
 */
export function GrFormFilter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"6 8 11.667 12.667 11.667 18 12.333 18 12.333 12.667 18 8 18 6 6 6"}}]})(props);
}
export default GrFormFilter;
