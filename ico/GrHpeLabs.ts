import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HpeLabs icon from Grommet-Icons
 * @module
 */
export function GrHpeLabs(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",strokeWidth:"2","points":"14 23 5 23 5 2 17 2 17 15 13 15 13 6 9 6 9 19 20 19"}}]})(props);
}
export default GrHpeLabs;
