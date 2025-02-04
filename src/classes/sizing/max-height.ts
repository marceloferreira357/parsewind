import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const maxHeight = clazzArrayToMap([
  ...Object.entries(spacingScale).flatMap(([key, { rem }]) => [
    { clazz: `max-h-${key}`, properties: `max-height: ${rem};` },
  ]),
  { clazz: "max-h-px", properties: "max-height: 1px;" },
  { clazz: "max-h-none", properties: "max-height: none;" },
  { clazz: "max-h-full", properties: "max-height: 100%;" },
  { clazz: "max-h-screen", properties: "max-height: 100vh;" },
  { clazz: "max-h-svh", properties: "max-height: 100svh;" },
  { clazz: "max-h-lvh", properties: "max-height: 100lvh;" },
  { clazz: "max-h-dvh", properties: "max-height: 100dvh;" },
  { clazz: "max-h-min", properties: "max-height: min-content;" },
  { clazz: "max-h-max", properties: "max-height: max-content;" },
  { clazz: "max-h-fit", properties: "max-height: fit-content;" },
]);
