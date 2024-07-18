import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Download icon from Grommet-Icons
 * @module
 */
export function GrDownload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12"}}]})(props);
}
export default GrDownload;
