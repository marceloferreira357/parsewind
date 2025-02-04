import { percentageSpacingScale, spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const flexBasis = clazzArrayToMap([
  ...Object.entries(spacingScale).flatMap(([key, { rem }]) => [
    { clazz: `basis-${key}`, properties: `flex-basis: ${rem};` },
  ]),
  { clazz: "basis-auto", properties: "flex-basis: auto;" },
  { clazz: "basis-px", properties: "flex-basis: 1px;" },
  ...Object.entries(percentageSpacingScale).flatMap(([key, { percentage }]) => [
    { clazz: `basis-${key}`, properties: `flex-basis: ${percentage};` },
  ]),
  { clazz: "basis-full", properties: "flex-basis: 100%;" },
]);
