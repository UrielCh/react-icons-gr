import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Power icon from Grommet-Icons
 * @module
 */
export function GrPower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M16,4 C19.3637732,5.43018182 22,8.98935065 22,13 C22,18.6008831 17.5273457,23 12,23 C6.47265429,23 2,18.6008831 2,13 C2,8.98935065 4.63622679,5.43018182 8,4 M12,1 L12,11"}}]})(props);
}
export default GrPower;
