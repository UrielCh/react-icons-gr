import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Compliance icon from Grommet-Icons
 * @module
 */
export function GrCompliance(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M8,6 L16,6 L16,1 L8,1 L8,6 L8,6 L8,6 Z M16,3 L21,3 L21,23 L3,23 L3,3 L8,3 M8,14 L11,17 L17,11"}}]})(props);
}
export default GrCompliance;
