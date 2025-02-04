import { percentageSpacingScale, spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const height = clazzArrayToMap([
  ...Object.entries(spacingScale).flatMap(([key, { rem }]) => [
    { clazz: `h-${key}`, properties: `height: ${rem};` },
  ]),
  { clazz: "h-px", properties: "height: 1px;" },
  { clazz: "h-auto", properties: "height: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) =>
      [
        "h-1/2",
        "h-1/3",
        "h-2/3",
        "h-1/4",
        "h-2/4",
        "h-3/4",
        "h-1/5",
        "h-2/5",
        "h-3/5",
        "h-4/5",
        "h-1/6",
        "h-2/6",
        "h-3/6",
        "h-4/6",
        "h-5/6",
      ].includes(key)
    )
    .flatMap(([key, { percentage }]) => ({
      clazz: `h-${key}`,
      properties: `height: ${percentage};`,
    })),
  { clazz: "h-full", properties: "height: 100%;" },
  { clazz: "h-screen", properties: "height: 100vh;" },
  { clazz: "h-svh", properties: "height: 100svh;" },
  { clazz: "h-lvh", properties: "height: 100lvh;" },
  { clazz: "h-dvh", properties: "height: 100dvh;" },
  { clazz: "h-min", properties: "height: min-content;" },
  { clazz: "h-max", properties: "height: max-content;" },
  { clazz: "h-fit", properties: "height: fit-content;" },
]);
