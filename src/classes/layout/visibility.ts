import { clazzArrayToMap } from "../../common/utils";

export const visibility = clazzArrayToMap([
  { clazz: "visible", properties: "visibility: visible;" },
  { clazz: "invisible", properties: "visibility: hidden;" },
  { clazz: "collapse", properties: "visibility: collapse;" },
]);
