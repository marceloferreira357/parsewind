import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const lineHeight = clazzArrayToMap([
  ...Object.entries(spacingScale)
    .filter(([key]) => ["3", "4", "5", "6", "7", "8", "9", "10"].includes(key))
    .flatMap(([key, { rem }]) => ({
      clazz: `leading-${key}`,
      properties: `line-height: ${rem};`,
    })),
  { clazz: "leading-none", properties: "line-height: 1;" },
  { clazz: "leading-tight", properties: "line-height: 1.25;" },
  { clazz: "leading-snug", properties: "line-height: 1.375;" },
  { clazz: "leading-normal", properties: "line-height: 1.5;" },
  { clazz: "leading-relaxed", properties: "line-height: 1.625;" },
  { clazz: "leading-loose", properties: "line-height: 2;" },
]);
