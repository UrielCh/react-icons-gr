import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gem icon from Grommet-Icons
 * @module
 */
export function GrGem(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M7 1H6.58579L6.29289 1.29289L3.29289 4.29289L3 4.58579V5V19V19.4142L3.29289 19.7071L6.29289 22.7071L6.58579 23H7H17H17.4142L17.7071 22.7071L20.7071 19.7071L21 19.4142V19V5V4.58579L20.7071 4.29289L17.7071 1.29289L17.4142 1H17H7ZM5 6V18H6V6H5ZM8 21H16V20H8V21ZM19 18V6H18V18H19ZM16 3H8V4H16V3ZM16 6V18H8V6H16Z"}}]})(props);
}
export default GrGem;
