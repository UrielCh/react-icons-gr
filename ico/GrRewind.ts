import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rewind icon from Grommet-Icons
 * @module
 */
export function GrRewind(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",strokeWidth:"2","points":"22 3.5 22 20 13 14 13 20 2 12 13 4 13 10"}}]})(props);
}
export default GrRewind;
