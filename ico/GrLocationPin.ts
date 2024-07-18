import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LocationPin icon from Grommet-Icons
 * @module
 */
export function GrLocationPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,10 C14.209139,10 16,8.209139 16,6 C16,3.790861 14.209139,2 12,2 C9.790861,2 8,3.790861 8,6 C8,8.209139 9.790861,10 12,10 Z M12,10 L12,22"}}]})(props);
}
export default GrLocationPin;
