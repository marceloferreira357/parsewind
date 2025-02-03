import { clazzArrayToMap } from "../../common/utils";

export const justifySelf = clazzArrayToMap([
  { clazz: "justify-self-auto", properties: "justify-self: auto;" },
  { clazz: "justify-self-start", properties: "justify-self: start;" },
  { clazz: "justify-self-end", properties: "justify-self: end;" },
  { clazz: "justify-self-center", properties: "justify-self: center;" },
  { clazz: "justify-self-stretch", properties: "justify-self: stretch;" },
]);
