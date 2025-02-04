import { percentageSpacingScale, spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const width = clazzArrayToMap([
  ...Object.entries(spacingScale).flatMap(([key, { rem }]) => [
    { clazz: `w-${key}`, properties: `width: ${rem};` },
  ]),
  { clazz: "w-auto", properties: "width: auto;" },
  ...Object.entries(percentageSpacingScale).flatMap(([key, { percentage }]) => [
    { clazz: `w-${key}`, properties: `width: ${percentage};` },
  ]),
  { clazz: "w-full", properties: "width: 100%;" },
  { clazz: "w-screen", properties: "width: 100vw;" },
  { clazz: "w-svw", properties: "width: 100svw;" },
  { clazz: "w-lvw", properties: "width: 100lvw;" },
  { clazz: "w-dvw", properties: "width: 100dvw;" },
  { clazz: "w-min", properties: "width: min-content;" },
  { clazz: "w-max", properties: "width: max-content;" },
  { clazz: "w-fit", properties: "width: fit-content;" },
]);
