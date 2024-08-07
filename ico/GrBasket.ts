import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Basket icon from Grommet-Icons
 * @module
 */
export function GrBasket(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M2,12 L22,12 L20,23 L4,23 L2,12 Z M20,8 L14,1 M4,8 L10,1 M1,8 L23,8 L23,12 L1,12 L1,8 Z M8,15 L8,20 M16,15 L16,20 M12,15 L12,20"}}]})(props);
}
export default GrBasket;
