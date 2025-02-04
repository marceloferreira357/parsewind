import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const minWidth = clazzArrayToMap([
  ...Object.entries(spacingScale).flatMap(([key, { rem }]) => [
    { clazz: `min-w-${key}`, properties: `min-width: ${rem};` },
  ]),
  { clazz: "min-w-px", properties: "min-width: 1px;" },
  { clazz: "min-w-full", properties: "min-width: 100%;" },
  { clazz: "min-w-min", properties: "min-width: min-content;" },
  { clazz: "min-w-max", properties: "min-width: max-content;" },
  { clazz: "min-w-fit", properties: "min-width: fit-content;" },
]);
