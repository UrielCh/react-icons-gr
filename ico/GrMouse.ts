import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Mouse icon from Grommet-Icons
 * @module
 */
export function GrMouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M12 4a5 5 0 015 5v6a5 5 0 01-10 0V9a5 5 0 015-5zm0 0v6m-6 0h12"}}]})(props);
}
export default GrMouse;
