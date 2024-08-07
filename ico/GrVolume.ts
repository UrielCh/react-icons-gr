import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Volume icon from Grommet-Icons
 * @module
 */
export function GrVolume(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M15,16 C17.209,16 19,14.209 19,12 C19,9.791 17.209,8 15,8 M15,20 C20,20 23,16.411 23,12 C23,7.589 19.411,4 15,4 M1,12 L1,8 L6,8 L12,3 L12,21 L6,16 L1,16 L1,12"}}]})(props);
}
export default GrVolume;
