import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Certificate icon from Grommet-Icons
 * @module
 */
export function GrCertificate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M15 19H2V1h16v4m0 0a5 5 0 110 10 5 5 0 010-10zm-3 9v8l3-2 3 2v-8M5 8h6m-6 3h5m-5 3h2M5 5h2"}}]})(props);
}
export default GrCertificate;
