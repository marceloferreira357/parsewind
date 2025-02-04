import { clazzArrayToMap } from "../../common/utils";

export const backgroundOrigin = clazzArrayToMap([
  { clazz: "bg-origin-border", properties: "background-origin: border-box;" },
  { clazz: "bg-origin-padding", properties: "background-origin: padding-box;" },
  { clazz: "bg-origin-content", properties: "background-origin: content-box;" },
]);
