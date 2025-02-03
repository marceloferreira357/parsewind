import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const width = clazzArrayToMap([
  ...Object.entries(spacingScale)
    .map(([key, { rem }]) => [
      { clazz: `w-${key}`, properties: `width: ${rem};` },
    ])
    .flat(),
  { clazz: "w-auto", properties: "width: auto;" },
  { clazz: "w-1/2", properties: "width: 50%;" },
  { clazz: "w-1/3", properties: "width: 33.333333%;" },
  { clazz: "w-2/3", properties: "width: 66.666667%;" },
  { clazz: "w-1/4", properties: "width: 25%;" },
  { clazz: "w-2/4", properties: "width: 50%;" },
  { clazz: "w-3/4", properties: "width: 75%;" },
  { clazz: "w-1/5", properties: "width: 20%;" },
  { clazz: "w-2/5", properties: "width: 40%;" },
  { clazz: "w-3/5", properties: "width: 60%;" },
  { clazz: "w-4/5", properties: "width: 80%;" },
  { clazz: "w-1/6", properties: "width: 16.666667%;" },
  { clazz: "w-2/6", properties: "width: 33.333333%;" },
  { clazz: "w-3/6", properties: "width: 50%;" },
  { clazz: "w-4/6", properties: "width: 66.666667%;" },
  { clazz: "w-5/6", properties: "width: 83.333333%;" },
  { clazz: "w-1/12", properties: "width: 8.333333%;" },
  { clazz: "w-2/12", properties: "width: 16.666667%;" },
  { clazz: "w-3/12", properties: "width: 25%;" },
  { clazz: "w-4/12", properties: "width: 33.333333%;" },
  { clazz: "w-5/12", properties: "width: 41.666667%;" },
  { clazz: "w-6/12", properties: "width: 50%;" },
  { clazz: "w-7/12", properties: "width: 58.333333%;" },
  { clazz: "w-8/12", properties: "width: 66.666667%;" },
  { clazz: "w-9/12", properties: "width: 75%;" },
  { clazz: "w-10/12", properties: "width: 83.333333%;" },
  { clazz: "w-11/12", properties: "width: 91.666667%;" },
  { clazz: "w-full", properties: "width: 100%;" },
  { clazz: "w-screen", properties: "width: 100vw;" },
  { clazz: "w-svw", properties: "width: 100svw;" },
  { clazz: "w-lvw", properties: "width: 100lvw;" },
  { clazz: "w-dvw", properties: "width: 100dvw;" },
  { clazz: "w-min", properties: "width: min-content;" },
  { clazz: "w-max", properties: "width: max-content;" },
  { clazz: "w-fit", properties: "width: fit-content;" },
]);
