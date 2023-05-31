import { GenIcon, type IconBaseProps } from "../deps.ts";

export function GrStatusPlaceholder(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"rect",attr:{"width":"20","height":"20",x:"2",y:"2",fill:"none",stroke:"#000",strokeWidth:"2","rx":"2"}}]})(props);
}
export default GrStatusPlaceholder;
