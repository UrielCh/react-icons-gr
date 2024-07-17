import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrStatusWarningSmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 12 12"},child:[{tag:"polygon",attr:{fillRule:"evenodd",strokeLinejoin:"round","points":"6 1 11 10 1 10"}}]})(props);
}
export default GrStatusWarningSmall;
