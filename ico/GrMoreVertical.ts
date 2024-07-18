import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoreVertical icon from Grommet-Icons
 * @module
 */
export function GrMoreVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14,14 L10,14 L10,10 L14,10 L14,14 Z M14,7 L10,7 L10,3 L14,3 L14,7 Z M14,21 L10,21 L10,17 L14,17 L14,21 Z"}}]})(props);
}
export default GrMoreVertical;
