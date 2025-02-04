import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const minHeight = clazzArrayToMap([
  ...Object.entries(spacingScale).flatMap(([key, { rem }]) => [
    { clazz: `min-h-${key}`, properties: `min-height: ${rem};` },
  ]),
  { clazz: "min-h-px", properties: "min-height: 1px;" },
  { clazz: "min-h-full", properties: "min-height: 100%;" },
  { clazz: "min-h-screen", properties: "min-height: 100vh;" },
  { clazz: "min-h-svh", properties: "min-height: 100svh;" },
  { clazz: "min-h-lvh", properties: "min-height: 100lvh;" },
  { clazz: "min-h-dvh", properties: "min-height: 100dvh;" },
  { clazz: "min-h-min", properties: "min-height: min-content;" },
  { clazz: "min-h-max", properties: "min-height: max-content;" },
  { clazz: "min-h-fit", properties: "min-height: fit-content;" },
]);
