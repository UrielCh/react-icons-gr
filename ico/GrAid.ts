import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Aid icon from Grommet-Icons
 * @module
 */
export function GrAid(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,22 L23,22 L23,6 L1,6 L1,22 Z M8,6 L16,6 L16,2 L8,2 L8,6 Z M8,14 L16,14 M12,10 L12,18"}}]})(props);
}
export default GrAid;
