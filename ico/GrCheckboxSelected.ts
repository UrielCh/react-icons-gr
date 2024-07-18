import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CheckboxSelected icon from Grommet-Icons
 * @module
 */
export function GrCheckboxSelected(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6"}}]})(props);
}
export default GrCheckboxSelected;
