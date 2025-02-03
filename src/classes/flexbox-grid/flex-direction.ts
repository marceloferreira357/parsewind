import { clazzArrayToMap } from "../../common/utils";

export const flexDirection = clazzArrayToMap([
  { clazz: "flex-row", properties: "flex-direction: row;" },
  { clazz: "flex-row-reverse", properties: "flex-direction: row-reverse;" },
  { clazz: "flex-col", properties: "flex-direction: column;" },
  { clazz: "flex-col-reverse", properties: "flex-direction: column-reverse;" },
]);
