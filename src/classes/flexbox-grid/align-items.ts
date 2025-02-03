import { clazzArrayToMap } from "../../common/utils";

export const alignItems = clazzArrayToMap([
  { clazz: "items-start", properties: "align-items: flex-start;" },
  { clazz: "items-end", properties: "align-items: flex-end;" },
  { clazz: "items-center", properties: "align-items: center;" },
  { clazz: "items-baseline", properties: "align-items: baseline;" },
  { clazz: "items-stretch", properties: "align-items: stretch;" },
]);
