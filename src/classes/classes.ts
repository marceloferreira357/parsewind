import { createClazzArray } from "../common/utils";
import { aspectRatio } from "./layout/aspect-ratio";
import { breakAfter } from "./layout/break-after";
import { breakBefore } from "./layout/break-before";
import { columns } from "./layout/columns";
import { container } from "./layout/container";

const aspectRatioMap = new Map(createClazzArray(aspectRatio));
const containerMap = new Map(createClazzArray(container));
const columnsMap = new Map(createClazzArray(columns));
const breakAfterMap = new Map(createClazzArray(breakAfter));
const breakBeforeMap = new Map(createClazzArray(breakBefore));

export const classes = new Map([
  ...aspectRatioMap,
  ...containerMap,
  ...columnsMap,
  ...breakAfterMap,
  ...breakBeforeMap,
]);
