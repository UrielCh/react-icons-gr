import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StatusWarning icon from Grommet-Icons
 * @module
 */
export function GrStatusWarning(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"2",d:"M12,3 L22,21 L2,21 L12,3 Z M12,9 L12,15 M12,16 L12,18"}}]})(props);
}
export default GrStatusWarning;
