import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CaretLeftFill icon from Grommet-Icons
 * @module
 */
export function GrCaretLeftFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M15 18V6l-6 6z"}}]})(props);
}
export default GrCaretLeftFill;
