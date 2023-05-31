import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function GrCheckbox(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"rect",attr:{"width":"20","height":"20",x:"2",y:"2",fill:"none",stroke:"#000",strokeWidth:"2"}}]})(props);
}
export default GrCheckbox;
