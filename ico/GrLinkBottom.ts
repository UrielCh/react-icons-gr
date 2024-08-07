import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LinkBottom icon from Grommet-Icons
 * @module
 */
export function GrLinkBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,5 L12,23 M4,13 L12,5 L20,13 M2,2 L22,2","transform":"matrix(1 0 0 -1 0 24)"}}]})(props);
}
export default GrLinkBottom;
