import { GenIcon, type IconBaseProps } from "../deps.ts";

export function GrLayer(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M1,1 L17,1 L17,17 L1,17 L1,1 Z M20,7 L23,7 L23,23 L7,23 L7,20 L7,20"}}]})(props);
}
export default GrLayer;
