import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LinkUp icon from Grommet-Icons
 * @module
 */
export function GrLinkUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,2 L12,22 M3,11 L12,2 L21,11"}}]})(props);
}
export default GrLinkUp;
