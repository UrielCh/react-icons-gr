import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Emoji icon from Grommet-Icons
 * @module
 */
export function GrEmoji(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12,1.73A10.27,10.27,0,1,0,22.24,12,10.25,10.25,0,0,0,12,1.73ZM21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12Z"}},{tag:"path",attr:{d:"M8.8,11.05a1.55,1.55,0,1,0-1.51-1.5A1.56,1.56,0,0,0,8.8,11.05Z"},child:[]},{tag:"path",attr:{d:"M15.44,11.05a1.55,1.55,0,1,0,0-3.09,1.53,1.53,0,0,0-1.51,1.59A1.51,1.51,0,0,0,15.44,11.05Z"},child:[]},{tag:"path",attr:{d:"M12.19,16.35A6.58,6.58,0,0,1,6.9,13.5a5.71,5.71,0,0,0,5.3,4,5.54,5.54,0,0,0,5.31-4A6.27,6.27,0,0,1,12.19,16.35Z"},child:[]}]})(props);
}
export default GrEmoji;
