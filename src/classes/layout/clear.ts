import { clazzArrayToMap } from "../../common/utils";

export const clear = clazzArrayToMap([
  { clazz: "clear-start", properties: "clear: inline-start;" },
  { clazz: "clear-end", properties: "clear: inline-end;" },
  { clazz: "clear-left", properties: "clear: left;" },
  { clazz: "clear-right", properties: "clear: right;" },
  { clazz: "clear-both", properties: "clear: both;" },
  { clazz: "clear-none", properties: "clear: none;" },
]);
