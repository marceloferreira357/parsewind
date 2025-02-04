import { clazzArrayToMap } from "../../common/utils";

export const fontStyle = clazzArrayToMap([
  {
    clazz: "italic",
    properties: "font-style: italic;",
  },
  {
    clazz: "not-italic",
    properties: "font-style: normal;",
  },
]);
