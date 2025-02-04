import { colorPalette } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const textColor = clazzArrayToMap([
  { clazz: "text-inherit", properties: "color: inherit;" },
  { clazz: "text-current", properties: "color: currentColor;" },
  { clazz: "text-transparent", properties: "color: transparent;" },
  ...Object.entries(colorPalette).flatMap(([key, { color }]) => ({
    clazz: `text-${key}`,
    properties: `color: ${color};`,
  })),
]);
