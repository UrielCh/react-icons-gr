import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cli icon from Grommet-Icons
 * @module
 */
export function GrCli(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,1 L23,1 L23,23 L1,23 L1,1 Z M1,5 L23,5 M5,1 L5,5 M11,16 L19,16 M5,10 L8,13 L5,16"}}]})(props);
}
export default GrCli;
