import { clazzArrayToMap } from "../../common/utils";

export const floats = clazzArrayToMap([
  { clazz: "float-start", properties: "float: inline-start;" },
  { clazz: "float-end", properties: "float: inline-end;" },
  { clazz: "float-right", properties: "float: right;" },
  { clazz: "float-left", properties: "float: left;" },
  { clazz: "float-none", properties: "float: none;" },
]);
