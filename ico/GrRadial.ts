import { GenIcon, type IconBaseProps } from "../deps.ts";

export function GrRadial(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"11",fill:"none",strokeWidth:"2"}}]})(props);
}
export default GrRadial;
