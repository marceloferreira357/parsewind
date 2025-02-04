import { percentageSpacingScale, spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const size = clazzArrayToMap([
  ...Object.entries(spacingScale).flatMap(([key, { rem }]) => [
    { clazz: `size-${key}`, properties: `width: ${rem}; height: ${rem}` },
  ]),
  { clazz: "size-px", properties: "width: 1px; height: 1px;" },
  { clazz: "size-auto", properties: "width: auto; height: auto;" },
  ...Object.entries(percentageSpacingScale).flatMap(([key, { percentage }]) => [
    {
      clazz: `size-${key}`,
      properties: `width: ${percentage}; height: ${percentage}`,
    },
  ]),
  { clazz: "size-full", properties: "width: 100%; height: 100%;" },
  { clazz: "size-min", properties: "width: min-content; height: min-content;" },
  { clazz: "size-max", properties: "width: max-content; height: max-content;" },
  { clazz: "size-fit", properties: "width: fit-content; height: fit-content;" },
]);
