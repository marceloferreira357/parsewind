import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const spaceBetween = clazzArrayToMap([
  { clazz: "space-x-0", properties: "margin-left: 0px;" },
  { clazz: "space-y-0", properties: "margin-top: 0px;" },

  { clazz: "space-x-px", properties: "margin-left: 1px;" },
  { clazz: "space-y-px", properties: "margin-top: 1px;" },

  { clazz: "space-y-reverse", properties: "--tw-space-y-reverse: 1;" },
  { clazz: "space-x-reverse", properties: "--tw-space-x-reverse: 1;" },

  ...Object.entries(spacingScale).flatMap(([key, { rem, px }]) => [
    { clazz: `space-x-${key}`, properties: `margin-left: ${px};` },
    { clazz: `space-y-${key}`, properties: `margin-top: ${px};` },
  ]),
]);
