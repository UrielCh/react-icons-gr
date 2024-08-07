import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gateway icon from Grommet-Icons
 * @module
 */
export function GrGateway(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M12 20v-5m0-6V4m-7 8h5m9 0h-5m-.969-4.031L12 9.344l-1.031-1.375h2.062zm-2.062 8.07L12 14.664l1.031 1.375H10.97zM6 13.031L4.625 12 6 10.969v2.062zm12-2.062L19.375 12 18 13.031V10.97zM12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"}}]})(props);
}
export default GrGateway;
