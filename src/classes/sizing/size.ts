import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const size = clazzArrayToMap([
  ...Object.entries(spacingScale)
    .map(([key, { rem }]) => [
      { clazz: `size-${key}`, properties: `width: ${rem}; height: ${rem}` },
    ])
    .flat(),
  { clazz: "size-px", properties: "width: 1px; height: 1px;" },
  { clazz: "size-auto", properties: "width: auto; height: auto;" },
  { clazz: "size-1/2", properties: "width: 50%; height: 50%;" },
  { clazz: "size-1/3", properties: "width: 33.333333%; height: 33.333333%;" },
  { clazz: "size-2/3", properties: "width: 66.666667%; height: 66.666667%;" },
  { clazz: "size-1/4", properties: "width: 25%; height: 25%;" },
  { clazz: "size-2/4", properties: "width: 50%; height: 50%;" },
  { clazz: "size-3/4", properties: "width: 75%; height: 75%;" },
  { clazz: "size-1/5", properties: "width: 20%; height: 20%;" },
  { clazz: "size-2/5", properties: "width: 40%; height: 40%;" },
  { clazz: "size-3/5", properties: "width: 60%; height: 60%;" },
  { clazz: "size-4/5", properties: "width: 80%; height: 80%;" },
  { clazz: "size-1/6", properties: "width: 16.666667%; height: 16.666667%;" },
  { clazz: "size-2/6", properties: "width: 33.333333%; height: 33.333333%;" },
  { clazz: "size-3/6", properties: "width: 50%; height: 50%;" },
  { clazz: "size-4/6", properties: "width: 66.666667%; height: 66.666667%;" },
  { clazz: "size-5/6", properties: "width: 83.333333%; height: 83.333333%;" },
  { clazz: "size-1/12", properties: "width: 8.333333%; height: 8.333333%;" },
  { clazz: "size-2/12", properties: "width: 16.666667%; height: 16.666667%;" },
  { clazz: "size-3/12", properties: "width: 25%; height: 25%;" },
  { clazz: "size-4/12", properties: "width: 33.333333%; height: 33.333333%;" },
  { clazz: "size-5/12", properties: "width: 41.666667%; height: 41.666667%;" },
  { clazz: "size-6/12", properties: "width: 50%; height: 50%;" },
  { clazz: "size-7/12", properties: "width: 58.333333%; height: 58.333333%;" },
  { clazz: "size-8/12", properties: "width: 66.666667%; height: 66.666667%;" },
  { clazz: "size-9/12", properties: "width: 75%; height: 75%;" },
  { clazz: "size-10/12", properties: "width: 83.333333%; height: 83.333333%;" },
  { clazz: "size-11/12", properties: "width: 91.666667%; height: 91.666667%;" },
  { clazz: "size-full", properties: "width: 100%; height: 100%;" },
  { clazz: "size-min", properties: "width: min-content; height: min-content;" },
  { clazz: "size-max", properties: "width: max-content; height: max-content;" },
  { clazz: "size-fit", properties: "width: fit-content; height: fit-content;" },
]);
