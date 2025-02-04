import { clazzArrayToMap } from "../../common/utils";

export const fontFamily = clazzArrayToMap([
  {
    clazz: "font-sans",
    properties:
      "font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';",
  },
  {
    clazz: "font-serif",
    properties:
      "font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;",
  },
  {
    clazz: "font-mono",
    properties:
      "font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;",
  },
]);
