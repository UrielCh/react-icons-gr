import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Moon icon from Grommet-Icons
 * @module
 */
export function GrMoon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeLinejoin:"round",strokeWidth:"2",d:"M9.874 5.008c2.728-1.68 6.604-1.014 8.25.197-2.955.84-5.11 3.267-5.242 6.415-.18 4.28 3.006 6.588 5.24 7.152-1.964 1.343-4.36 1.293-5.235 1.172-3.568-.492-6.902-3.433-7.007-7.711-.106-4.278 2.573-6.35 3.994-7.225z"}}]})(props);
}
export default GrMoon;
