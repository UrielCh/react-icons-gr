import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Emergency icon from Grommet-Icons
 * @module
 */
export function GrEmergency(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10,7.17157288 L10,2 L14,2 L14,7.17157288 L17.6568542,3.51471863 L20.4852814,6.34314575 L16.8284271,10 L22,10 L22,14 L16.8284271,14 L20.4852814,17.6568542 L17.6568542,20.4852814 L14,16.8284271 L14,22 L10,22 L10,16.8284271 L6.34314575,20.4852814 L3.51471863,17.6568542 L7.17157288,14 L2,14 L2,10 L7.17157288,10 L3.51471863,6.34314575 L6.34314575,3.51471863 L10,7.17157288 Z"}}]})(props);
}
export default GrEmergency;
