import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Task icon from Grommet-Icons
 * @module
 */
export function GrTask(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,20 L24,20 M12,12 L24,12 M12,4 L24,4 M1,19 L4,22 L9,17 M1,11 L4,14 L9,9 M9,1 L4,6 L1,3"}}]})(props);
}
export default GrTask;
