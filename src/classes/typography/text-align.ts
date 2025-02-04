import { clazzArrayToMap } from "../../common/utils";

export const textAlign = clazzArrayToMap([
  { clazz: "text-left", properties: "text-align: left;" },
  { clazz: "text-center", properties: "text-align: center;" },
  { clazz: "text-right", properties: "text-align: right;" },
  { clazz: "text-justify", properties: "text-align: justify;" },
  { clazz: "text-start", properties: "text-align: start;" },
  { clazz: "text-end", properties: "text-align: end;" },
]);
