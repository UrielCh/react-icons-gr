import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cube icon from Grommet-Icons
 * @module
 */
export function GrCube(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,2 L22,7 L22,17 L12,22 L2,17 L2,7 L12,2 Z M2,7 L12,12 L22,7 M12,12 L12,21.9999998 L12,12 Z"}}]})(props);
}
export default GrCube;
