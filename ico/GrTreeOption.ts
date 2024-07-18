import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TreeOption icon from Grommet-Icons
 * @module
 */
export function GrTreeOption(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M7,13 L11.375,6 L9,6 L12,2 L15,6 L12.625,6 L17,13 L15,13 L19,19.6666667 L5,19.6666667 L9,13 L7,13 Z M12,24 L12,20"}}]})(props);
}
export default GrTreeOption;
