import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Beacon icon from Grommet-Icons
 * @module
 */
export function GrBeacon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M12 12a3 3 0 100-6 3 3 0 000 6zm0 0v11M7.05 4.05A6.978 6.978 0 005 9c0 1.933.784 3.683 2.05 4.95m9.9 0A6.978 6.978 0 0019 9a6.978 6.978 0 00-2.05-4.95M4.222 1.222A10.966 10.966 0 001 9c0 3.037 1.231 5.787 3.222 7.778m15.556 0A10.966 10.966 0 0023 9c0-3.038-1.231-5.788-3.222-7.778"}}]})(props);
}
export default GrBeacon;
