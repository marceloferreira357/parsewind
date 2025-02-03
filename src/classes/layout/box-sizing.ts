import { clazzArrayToMap } from "../../common/utils";

export const boxSizing = clazzArrayToMap([
  { clazz: "box-border", properties: "box-sizing: border-box;" },
  { clazz: "box-content", properties: "box-sizing: content-box;" },
]);
