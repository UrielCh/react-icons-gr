import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Info icon from Grommet-Icons
 * @module
 */
export function GrInfo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M15,17.0002864 C15,14.0000003 19,12.0005727 19,8.00028636 C19,4.00000002 16,1.00028636 12,1.00028636 C8,1.00028636 5,4.00000002 5,8.00028636 C5,12.0005727 9,14.0000003 9,17.0002864 C9,20.0005725 9,20 9,20 C9,22.0000003 10,22.9999997 12,23 C14,23.0000003 15,22.0000003 15,20 C15,20 15,20.0005725 15,17.0002864 Z M9,18 L15,18"}}]})(props);
}
export default GrInfo;
