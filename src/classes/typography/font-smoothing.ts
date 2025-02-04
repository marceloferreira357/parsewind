import { clazzArrayToMap } from "../../common/utils";

export const fontSmoothing = clazzArrayToMap([
  {
    clazz: "antialiased",
    properties:
      "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  },
  {
    clazz: "subpixel-antialiased",
    properties: "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;",
  },
]);
