import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Analytics icon from Grommet-Icons
 * @module
 */
export function GrAnalytics(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M20,7 C21.25,8.67 22,10.75 22,13 C22,18.52 17.52,23 12,23 C6.48,23 2,18.52 2,13 C2,7.48 6.48,3 12,3 M12,1 L12,13 L21.6,5.8 C19.41,2.89 15.92,1 12,1 L12,1 Z"}}]})(props);
}
export default GrAnalytics;
