import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const maxWidth = clazzArrayToMap([
  ...Object.entries(spacingScale)
    .map(([key, { rem }]) => [
      { clazz: `max-w-${key}`, properties: `max-width: ${rem};` },
    ])
    .flat(),
  { clazz: "max-w-none", properties: "max-width: none;" },
  { clazz: "max-w-xs", properties: "max-width: 20rem;" },
  { clazz: "max-w-sm", properties: "max-width: 24rem;" },
  { clazz: "max-w-md", properties: "max-width: 28rem;" },
  { clazz: "max-w-lg", properties: "max-width: 32rem;" },
  { clazz: "max-w-xl", properties: "max-width: 36rem;" },
  { clazz: "max-w-2xl", properties: "max-width: 42rem;" },
  { clazz: "max-w-3xl", properties: "max-width: 48rem;" },
  { clazz: "max-w-4xl", properties: "max-width: 56rem;" },
  { clazz: "max-w-5xl", properties: "max-width: 64rem;" },
  { clazz: "max-w-6xl", properties: "max-width: 72rem;" },
  { clazz: "max-w-7xl", properties: "max-width: 80rem;" },
  { clazz: "max-w-full", properties: "max-width: 100%;" },
  { clazz: "max-w-min", properties: "max-width: min-content;" },
  { clazz: "max-w-max", properties: "max-width: max-content;" },
  { clazz: "max-w-fit", properties: "max-width: fit-content;" },
  { clazz: "max-w-prose", properties: "max-width: 65ch;" },
  { clazz: "max-w-screen-sm", properties: "max-width: 640px;" },
  { clazz: "max-w-screen-md", properties: "max-width: 768px;" },
  { clazz: "max-w-screen-lg", properties: "max-width: 1024px;" },
  { clazz: "max-w-screen-xl", properties: "max-width: 1280px;" },
  { clazz: "max-w-screen-2xl", properties: "max-width: 1536px;" },
]);
