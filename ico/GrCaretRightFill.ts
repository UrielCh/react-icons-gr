import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CaretRightFill icon from Grommet-Icons
 * @module
 */
export function GrCaretRightFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M9 6v12l6-6z"}}]})(props);
}
export default GrCaretRightFill;
