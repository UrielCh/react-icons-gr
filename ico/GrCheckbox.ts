import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Checkbox icon from Grommet-Icons
 * @module
 */
export function GrCheckbox(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"rect",attr:{"width":"20","height":"20",x:"2",y:"2",fill:"none",strokeWidth:"2"}}]})(props);
}
export default GrCheckbox;
