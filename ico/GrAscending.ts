import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ascending icon from Grommet-Icons
 * @module
 */
export function GrAscending(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M12.0809 7.28641L12.4345 6.93286L12.788 7.28641L17 11.4984L16.2929 12.2055L12.9345 8.84707V16.9999H11.9345V8.84707L8.57605 12.2055L7.86895 11.4984L12.0809 7.28641Z"}}]})(props);
}
export default GrAscending;
