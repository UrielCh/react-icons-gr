import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Package icon from Grommet-Icons
 * @module
 */
export function GrPackage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd","clipRule":"evenodd",d:"M12.3714 0.571408L12 0.422852L11.6286 0.571408L1.62861 4.57141L1 4.82285V5.49988V18.4999V19.1769L1.62861 19.4284L11.6286 23.4284L12 23.5769L12.3714 23.4284L22.3714 19.4284L23 19.1769V18.4999V5.49988V4.82285L22.3714 4.57141L12.3714 0.571408ZM3 6.97692V17.8229L11 21.0229V10.1769L3 6.97692ZM13 10.1769V21.0229L21 17.8229V6.97692L13 10.1769ZM19.3074 5.49988L12 2.57692L9.94258 3.39988L17.25 6.32285L19.3074 5.49988ZM4.69258 5.49988L7.25 4.47692L14.5574 7.39988L12 8.42285L4.69258 5.49988Z"}}]})(props);
}
export default GrPackage;
