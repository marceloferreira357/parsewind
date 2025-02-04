import { clazzArrayToMap } from "../../common/utils";

export const wordBreak = clazzArrayToMap([
  {
    clazz: "break-normal",
    properties: "overflow-wrap: normal; word-break: normal;",
  },
  { clazz: "break-words", properties: "overflow-wrap: break-word;" },
  { clazz: "break-all", properties: "word-break: break-all;" },
  { clazz: "break-keep", properties: "word-break: keep-all;" },
]);
