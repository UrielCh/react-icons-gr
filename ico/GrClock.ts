import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Clock icon from Grommet-Icons
 * @module
 */
export function GrClock(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13 7a1 1 0 10-2 0v5a1 1 0 00.4.8l4 3a1 1 0 001.2-1.6L13 11.5V7z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12a9 9 0 1118 0 9 9 0 01-18 0z","clipRule":"evenodd"},child:[]}]})(props);
}
export default GrClock;
