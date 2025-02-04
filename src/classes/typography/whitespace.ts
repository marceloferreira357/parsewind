import { clazzArrayToMap } from "../../common/utils";

export const whitespace = clazzArrayToMap([
  { clazz: "whitespace-normal", properties: "white-space: normal;" },
  { clazz: "whitespace-nowrap", properties: "white-space: nowrap;" },
  { clazz: "whitespace-pre", properties: "white-space: pre;" },
  { clazz: "whitespace-pre-line", properties: "white-space: pre-line;" },
  { clazz: "whitespace-pre-wrap", properties: "white-space: pre-wrap;" },
  {
    clazz: "whitespace-break-spaces",
    properties: "white-space: break-spaces;",
  },
]);
