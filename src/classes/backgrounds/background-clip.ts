import { clazzArrayToMap } from "../../common/utils";

export const backgroundClip = clazzArrayToMap([
  { clazz: "bg-clip-border", properties: "background-clip: border-box;" },
  { clazz: "bg-clip-padding", properties: "background-clip: padding-box;" },
  { clazz: "bg-clip-content", properties: "background-clip: content-box;" },
  { clazz: "bg-clip-text", properties: "background-clip: text;" },
]);
