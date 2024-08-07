import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Notes icon from Grommet-Icons
 * @module
 */
export function GrNotes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M3,1 L3,23 L16,23 L21,18 L21,1 L3,1 Z M6,17 L11,17 M6,13 L18,13 M6,9 L16,9 M3,5 L21,5 M21,17 L15,17 L15,23"}}]})(props);
}
export default GrNotes;
