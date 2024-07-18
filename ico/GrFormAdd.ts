import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FormAdd icon from Grommet-Icons
 * @module
 */
export function GrFormAdd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,18 L12,6 M6,12 L18,12"}}]})(props);
}
export default GrFormAdd;
