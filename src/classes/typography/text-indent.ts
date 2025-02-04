import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const textIndent = clazzArrayToMap([
  { clazz: "indent-px", properties: "text-indent: 1px;" },
  ...Object.entries(spacingScale).flatMap(([key, { rem }]) => ({
    clazz: `indent-${key}`,
    properties: `text-indent: ${rem};`,
  })),
]);
