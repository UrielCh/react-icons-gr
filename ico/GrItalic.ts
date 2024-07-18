import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Italic icon from Grommet-Icons
 * @module
 */
export function GrItalic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13,19.56l-.13.43H6.3l.16-.43a4.05,4.05,0,0,0,1.3-.17,1.6,1.6,0,0,0,.76-.55,7.22,7.22,0,0,0,.8-2l2.77-9.61a7.07,7.07,0,0,0,.35-1.81.86.86,0,0,0-.15-.52.94.94,0,0,0-.46-.32,4.28,4.28,0,0,0-1.22-.11l.14-.43h6.16l-.13.43a2.6,2.6,0,0,0-1.12.17,1.78,1.78,0,0,0-.81.67,9.08,9.08,0,0,0-.71,1.93L11.4,16.87A8.76,8.76,0,0,0,11,18.56a.83.83,0,0,0,.15.5.92.92,0,0,0,.47.32A6.35,6.35,0,0,0,13,19.56Z"}}]})(props);
}
export default GrItalic;
