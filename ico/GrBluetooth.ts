import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bluetooth icon from Grommet-Icons
 * @module
 */
export function GrBluetooth(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"7 7 17 16 12 20 12 4 17 8 7 16"}}]})(props);
}
export default GrBluetooth;
