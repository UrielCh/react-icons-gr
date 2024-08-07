import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ChapterAdd icon from Grommet-Icons
 * @module
 */
export function GrChapterAdd(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M5,14 L5,5 L19,5 L19,20 L11,20 M19,16 L23,16 L23,1 L9,1 L9,5 M5,16 L5,24 M9,20 L1,20"}}]})(props);
}
export default GrChapterAdd;
