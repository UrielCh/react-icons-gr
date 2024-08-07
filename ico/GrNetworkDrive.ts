import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NetworkDrive icon from Grommet-Icons
 * @module
 */
export function GrNetworkDrive(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M12 14v4M22 6v6a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h18a1 1 0 011 1zM12 21a2 2 0 100-4 2 2 0 000 4zM6 10a1 1 0 100-2 1 1 0 000 2z"}}]})(props);
}
export default GrNetworkDrive;
