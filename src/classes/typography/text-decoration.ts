import { clazzArrayToMap } from "../../common/utils";

export const textDecoration = clazzArrayToMap([
  { clazz: "underline", properties: "text-decoration-line: underline;" },
  { clazz: "overline", properties: "text-decoration-line: overline;" },
  { clazz: "line-through", properties: "text-decoration-line: line-through;" },
  { clazz: "no-underline", properties: "text-decoration-line: none;" },
]);
