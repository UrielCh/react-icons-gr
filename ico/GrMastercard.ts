import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GrMastercard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none",fillRule:"evenodd"},child:[{tag:"circle",attr:{"cx":"7","cy":"12","r":"7"}},{tag:"circle",attr:{"cx":"17","cy":"12","r":"7","fillOpacity":".8"},child:[]}]}]})(props);
}
export default GrMastercard;
