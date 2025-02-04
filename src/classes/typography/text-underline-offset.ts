import { clazzArrayToMap } from "../../common/utils";

export const textUnderlineOffset = clazzArrayToMap([
  {
    clazz: "underline-offset-auto",
    properties: "text-underline-offset: auto;",
  },
  { clazz: "underline-offset-0", properties: "text-underline-offset: 0px;" },
  { clazz: "underline-offset-1", properties: "text-underline-offset: 1px;" },
  { clazz: "underline-offset-2", properties: "text-underline-offset: 2px;" },
  { clazz: "underline-offset-4", properties: "text-underline-offset: 4px;" },
  { clazz: "underline-offset-8", properties: "text-underline-offset: 8px;" },
]);
