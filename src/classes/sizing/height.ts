import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const height = clazzArrayToMap([
  ...Object.entries(spacingScale)
    .map(([key, { rem }]) => [
      { clazz: `h-${key}`, properties: `height: ${rem};` },
    ])
    .flat(),
  { clazz: "h-px", properties: "height: 1px;" },
  { clazz: "h-auto", properties: "height: auto;" },
  { clazz: "h-1/2", properties: "height: 50%;" },
  { clazz: "h-1/3", properties: "height: 33.333333%;" },
  { clazz: "h-2/3", properties: "height: 66.666667%;" },
  { clazz: "h-1/4", properties: "height: 25%;" },
  { clazz: "h-2/4", properties: "height: 50%;" },
  { clazz: "h-3/4", properties: "height: 75%;" },
  { clazz: "h-1/5", properties: "height: 20%;" },
  { clazz: "h-2/5", properties: "height: 40%;" },
  { clazz: "h-3/5", properties: "height: 60%;" },
  { clazz: "h-4/5", properties: "height: 80%;" },
  { clazz: "h-1/6", properties: "height: 16.666667%;" },
  { clazz: "h-2/6", properties: "height: 33.333333%;" },
  { clazz: "h-3/6", properties: "height: 50%;" },
  { clazz: "h-4/6", properties: "height: 66.666667%;" },
  { clazz: "h-5/6", properties: "height: 83.333333%;" },
  { clazz: "h-full", properties: "height: 100%;" },
  { clazz: "h-screen", properties: "height: 100vh;" },
  { clazz: "h-svh", properties: "height: 100svh;" },
  { clazz: "h-lvh", properties: "height: 100lvh;" },
  { clazz: "h-dvh", properties: "height: 100dvh;" },
  { clazz: "h-min", properties: "height: min-content;" },
  { clazz: "h-max", properties: "height: max-content;" },
  { clazz: "h-fit", properties: "height: fit-content;" },
]);
