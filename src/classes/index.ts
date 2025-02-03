import { createClazzArray } from "../common/utils";
import { alignContent } from "./flexbox-grid/align-content";
import { alignItems } from "./flexbox-grid/align-items";
import { alignSelf } from "./flexbox-grid/align-self";
import { flex } from "./flexbox-grid/flex";
import { flexBasis } from "./flexbox-grid/flex-basis";
import { flexDirection } from "./flexbox-grid/flex-direction";
import { flexGrow } from "./flexbox-grid/flex-grow";
import { flexShrink } from "./flexbox-grid/flex-shrink";
import { flexWrap } from "./flexbox-grid/flex-wrap";
import { gap } from "./flexbox-grid/gap";
import { gridAutoColumns } from "./flexbox-grid/grid-auto-columns";
import { gridAutoFlow } from "./flexbox-grid/grid-auto-flow";
import { gridAutoRows } from "./flexbox-grid/grid-auto-rows";
import { gridColumnStartEnd } from "./flexbox-grid/grid-column-start-end";
import { gridRowStartEnd } from "./flexbox-grid/grid-row-start-end";
import { gridTemplateColumns } from "./flexbox-grid/grid-template-columns";
import { gridTemplateRows } from "./flexbox-grid/grid-template-rows";
import { justifyContent } from "./flexbox-grid/justify-content";
import { justifyItems } from "./flexbox-grid/justify-items";
import { justifySelf } from "./flexbox-grid/justify-self";
import { order } from "./flexbox-grid/order";
import { placeContent } from "./flexbox-grid/place-content";
import { placeItems } from "./flexbox-grid/place-items";
import { placeSelf } from "./flexbox-grid/place-self";
import { aspectRatio } from "./layout/aspect-ratio";
import { boxDecorationBreak } from "./layout/box-decoration-break";
import { boxSizing } from "./layout/box-sizing";
import { breakAfter } from "./layout/break-after";
import { breakBefore } from "./layout/break-before";
import { breakInside } from "./layout/break-inside";
import { clear } from "./layout/clear";
import { columns } from "./layout/columns";
import { container } from "./layout/container";
import { display } from "./layout/display";
import { floats } from "./layout/floats";
import { isolation } from "./layout/isolation";
import { objectFit } from "./layout/object-fit";
import { objectPosition } from "./layout/object-position";
import { overflow } from "./layout/overflow";
import { overscrollBehavior } from "./layout/overscroll-behavior";
import { position } from "./layout/position";
import { topRightBottomLeft } from "./layout/top-right-bottom-left";
import { visibility } from "./layout/visibility";
import { zIndex } from "./layout/z-index";
import { height } from "./sizing/height";
import { maxHeight } from "./sizing/max-height";
import { maxWidth } from "./sizing/max-width";
import { minHeight } from "./sizing/min-height";
import { minWidth } from "./sizing/min-width";
import { size } from "./sizing/size";
import { margin } from "./spacing/margin";
import { padding } from "./spacing/padding";
import { spaceBetween } from "./spacing/space-between";

const layout = [
  ...new Map(createClazzArray(aspectRatio)),
  ...new Map(createClazzArray(boxDecorationBreak)),
  ...new Map(createClazzArray(boxSizing)),
  ...new Map(createClazzArray(breakAfter)),
  ...new Map(createClazzArray(breakBefore)),
  ...new Map(createClazzArray(breakInside)),
  ...new Map(createClazzArray(clear)),
  ...new Map(createClazzArray(columns)),
  ...new Map(createClazzArray(container)),
  ...new Map(createClazzArray(display)),
  ...new Map(createClazzArray(floats)),
  ...new Map(createClazzArray(isolation)),
  ...new Map(createClazzArray(objectFit)),
  ...new Map(createClazzArray(objectPosition)),
  ...new Map(createClazzArray(overflow)),
  ...new Map(createClazzArray(overscrollBehavior)),
  ...new Map(createClazzArray(position)),
  ...new Map(createClazzArray(topRightBottomLeft)),
  ...new Map(createClazzArray(visibility)),
  ...new Map(createClazzArray(zIndex)),
];

const flexboxGrid = [
  ...new Map(createClazzArray(alignContent)),
  ...new Map(createClazzArray(alignItems)),
  ...new Map(createClazzArray(alignSelf)),
  ...new Map(createClazzArray(flexBasis)),
  ...new Map(createClazzArray(flexDirection)),
  ...new Map(createClazzArray(flexGrow)),
  ...new Map(createClazzArray(flexShrink)),
  ...new Map(createClazzArray(flexWrap)),
  ...new Map(createClazzArray(flex)),
  ...new Map(createClazzArray(gap)),
  ...new Map(createClazzArray(gridAutoColumns)),
  ...new Map(createClazzArray(gridAutoFlow)),
  ...new Map(createClazzArray(gridAutoRows)),
  ...new Map(createClazzArray(gridColumnStartEnd)),
  ...new Map(createClazzArray(gridRowStartEnd)),
  ...new Map(createClazzArray(gridTemplateColumns)),
  ...new Map(createClazzArray(gridTemplateRows)),
  ...new Map(createClazzArray(justifyContent)),
  ...new Map(createClazzArray(justifyItems)),
  ...new Map(createClazzArray(justifySelf)),
  ...new Map(createClazzArray(order)),
  ...new Map(createClazzArray(placeContent)),
  ...new Map(createClazzArray(placeItems)),
  ...new Map(createClazzArray(placeSelf)),
];

const spacing = [
  ...new Map(createClazzArray(margin)),
  ...new Map(createClazzArray(padding)),
  ...new Map(createClazzArray(spaceBetween)),
];

const sizing = [
  ...new Map(createClazzArray(height)),
  ...new Map(createClazzArray(maxHeight)),
  ...new Map(createClazzArray(maxWidth)),
  ...new Map(createClazzArray(minHeight)),
  ...new Map(createClazzArray(minWidth)),
  ...new Map(createClazzArray(size)),
  ...new Map(createClazzArray(spaceBetween)),
];

export const classes = new Map([
  ...layout,
  ...flexboxGrid,
  ...spacing,
  ...sizing,
]);
