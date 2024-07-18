import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CaretPrevious icon from Grommet-Icons
 * @module
 */
export function GrCaretPrevious(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"6 2 18 12 6 22","transform":"matrix(-1 0 0 1 24 0)"}}]})(props);
}
export default GrCaretPrevious;
