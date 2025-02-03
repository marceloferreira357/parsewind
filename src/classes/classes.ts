import { createClazzArray } from "../common/utils";
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

export const classes = new Map([...layout]);
