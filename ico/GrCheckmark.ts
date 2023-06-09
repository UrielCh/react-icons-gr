import { GenIcon, type IconBaseProps } from "../deps.ts";

export function GrCheckmark(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2","points":"2 14 9 20 22 4"}}]})(props);
}
export default GrCheckmark;
