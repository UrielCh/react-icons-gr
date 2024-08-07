import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Html5 icon from Grommet-Icons
 * @module
 */
export function GrHtml5(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M3,2 L21,2 L21,18 L12,22 L3,18 L3,2 Z M17,6 L8,6 L8,11 L16,11 L16,16 L12,17.5 L8,16 L8,14"}}]})(props);
}
export default GrHtml5;
