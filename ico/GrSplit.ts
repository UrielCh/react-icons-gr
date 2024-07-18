import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Split icon from Grommet-Icons
 * @module
 */
export function GrSplit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,22 L23,22 L23,2 L1,2 L1,22 Z M12,2 L12,22 L12,2 Z"}}]})(props);
}
export default GrSplit;
