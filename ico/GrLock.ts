import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lock icon from Grommet-Icons
 * @module
 */
export function GrLock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M19,23 L19,11 L5,11 L5,23 L19,23 Z M12,15 L12,19 M17,11 L17,7 C17,4 17,1 12,1 C7,1 7,4 7,7 L7,11"}}]})(props);
}
export default GrLock;
