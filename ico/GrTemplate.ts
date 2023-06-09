import { GenIcon, type IconBaseProps } from "../deps.ts";

export function GrTemplate(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,3 L23,3 L23,21 L1,21 L1,3 Z M1,8 L23,8 M7,8 L7,21"}}]})(props);
}
export default GrTemplate;
