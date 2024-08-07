import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Redo icon from Grommet-Icons
 * @module
 */
export function GrRedo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.82,4,15.4,5.44,17.94,8H8.23a6,6,0,0,0,0,12h2V18h-2a4,4,0,0,1,0-8h9.71L15.4,12.51l1.41,1.41L21.77,9Z"}}]})(props);
}
export default GrRedo;
