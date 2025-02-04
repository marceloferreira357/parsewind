import { colorPalette } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const backgroundColor = clazzArrayToMap([
  { clazz: "bg-inherit", properties: "background-color: inherit;" },
  { clazz: "bg-current", properties: "background-color: currentColor;" },
  { clazz: "bg-transparent", properties: "background-color: transparent;" },
  ...Object.entries(colorPalette).flatMap(([key, { color }]) => ({
    clazz: `bg-${key}`,
    properties: `background-color: ${color};`,
  })),
]);
