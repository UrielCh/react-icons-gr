import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Resources icon from Grommet-Icons
 * @module
 */
export function GrResources(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M12,3 L21,7.5 L12,12 L3,7.5 L12,3 Z M16.5,10.25 L21,12.5 L12,17 L3,12.5 L7.5,10.25 L7.5,10.25 M16.5,15.25 L21,17.5 L12,22 L3,17.5 L7.5,15.25 L7.5,15.25"}}]})(props);
}
export default GrResources;
