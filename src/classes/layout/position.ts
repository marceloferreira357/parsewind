import { clazzArrayToMap } from "../../common/utils";

export const position = clazzArrayToMap([
  { clazz: "static", properties: "position: static;" },
  { clazz: "fixed", properties: "position: fixed;" },
  { clazz: "absolute", properties: "position: absolute;" },
  { clazz: "relative", properties: "position: relative;" },
  { clazz: "sticky", properties: "position: sticky;" },
]);
