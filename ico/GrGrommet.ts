import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grommet icon from Grommet-Icons
 * @module
 */
export function GrGrommet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"4",d:"M12,2 C6.485,2 2,6.485 2,12 C2,17.515 6.485,22 12,22 C17.515,22 22,17.515 22,12 C22,6.485 17.515,2 12,2 Z"}}]})(props);
}
export default GrGrommet;
