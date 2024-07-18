import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Alert icon from Grommet-Icons
 * @module
 */
export function GrAlert(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,17 L12,19 M12,10 L12,16 M12,3 L2,22 L22,22 L12,3 Z"}}]})(props);
}
export default GrAlert;
