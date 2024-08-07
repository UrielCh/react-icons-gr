import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Integration icon from Grommet-Icons
 * @module
 */
export function GrIntegration(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M5,21 L23,21 L23,9 L5,9 M19,15 L1,15 L1,3 L19,3"}}]})(props);
}
export default GrIntegration;
