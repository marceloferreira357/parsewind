import { clazzArrayToMap } from "../../common/utils";

export const textWrap = clazzArrayToMap([
  { clazz: "text-wrap", properties: "white-space: normal;" },
  { clazz: "text-nowrap", properties: "white-space: nowrap;" },
  { clazz: "text-balance", properties: "text-wrap: balance;" },
  { clazz: "text-pretty", properties: "text-wrap: pretty;" },
]);
