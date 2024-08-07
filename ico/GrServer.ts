import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Server icon from Grommet-Icons
 * @module
 */
export function GrServer(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M14,19 L15,19 L15,18 L14,18 L14,19 Z M5,23 L19,23 L19,1 L5,1 L5,23 Z M8,5 L16,5 L8,5 Z M8,9 L16,9 L8,9 Z M8,13 L16,13 L8,13 Z"}}]})(props);
}
export default GrServer;
