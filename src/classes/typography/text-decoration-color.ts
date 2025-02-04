import { colorPalette } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const textDecorationColor = clazzArrayToMap([
  {
    clazz: "decoration-inherit",
    properties: "text-decoration-color: inherit;",
  },
  {
    clazz: "decoration-current",
    properties: "text-decoration-color: currentColor;",
  },
  {
    clazz: "decoration-transparent",
    properties: "text-decoration-color: transparent;",
  },
  ...Object.entries(colorPalette).flatMap(([key, { color }]) => ({
    clazz: `decoration-${key}`,
    properties: `text-decoration-color: ${color};`,
  })),
]);
