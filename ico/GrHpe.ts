import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hpe icon from Grommet-Icons
 * @module
 */
export function GrHpe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 48 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M2 6H46V18H2V6ZM5 9H43V15H5V9Z"}}]})(props);
}
export default GrHpe;
