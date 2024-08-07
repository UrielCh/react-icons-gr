import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sans icon from Grommet-Icons
 * @module
 */
export function GrSans(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M1 12h22M2 22h20a1 1 0 001-1V3a1 1 0 00-1-1H2a1 1 0 00-1 1v18a1 1 0 001 1zM5 8a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 100-2 1 1 0 000 2z"}}]})(props);
}
export default GrSans;
