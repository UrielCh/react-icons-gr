import { GenIcon, type IconBaseProps } from "../deps.ts";

export function GrTopCorner(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2","points":"4 16 16 16 16 4","transform":"rotate(180 10 10)"}}]})(props);
}
export default GrTopCorner;
