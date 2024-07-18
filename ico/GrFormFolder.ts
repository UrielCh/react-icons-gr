import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FormFolder icon from Grommet-Icons
 * @module
 */
export function GrFormFolder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"6 18 6 6 10.8 6 12.6 8.4 18 8.4 18 18"}}]})(props);
}
export default GrFormFolder;
