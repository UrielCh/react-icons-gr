import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Descending icon from Grommet-Icons
 * @module
 */
export function GrDescending(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M11.9191 16.7136L11.5655 17.0671L11.212 16.7136L7 12.5016L7.70711 11.7945L11.0655 15.1529V7.00009H12.0655V15.1529L15.4239 11.7945L16.1311 12.5016L11.9191 16.7136Z"}}]})(props);
}
export default GrDescending;
