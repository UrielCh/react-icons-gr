import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Document icon from Grommet-Icons
 * @module
 */
export function GrDocument(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M14,1 L14,8 L21,8 M21,23 L3,23 L3,1 L15,1 L18,4 L21,7 L21,23 L21,23 L21,23 Z"}}]})(props);
}
export default GrDocument;
