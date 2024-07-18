import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shield icon from Grommet-Icons
 * @module
 */
export function GrShield(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,22 C12,22 3,18 3,5 C3,5 12,2 12,2 C12,2 21,5 21,5 C21,18 12,22 12,22 Z M4,11 L20,11 M12,2 L12,22"}}]})(props);
}
export default GrShield;
