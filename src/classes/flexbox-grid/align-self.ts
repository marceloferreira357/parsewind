import { clazzArrayToMap } from "../../common/utils";

export const alignSelf = clazzArrayToMap([
  { clazz: "self-auto", properties: "align-self: auto;" },
  { clazz: "self-start", properties: "align-self: flex-start;" },
  { clazz: "self-end", properties: "align-self: flex-end;" },
  { clazz: "self-center", properties: "align-self: center;" },
  { clazz: "self-stretch", properties: "align-self: stretch;" },
  { clazz: "self-baseline", properties: "align-self: baseline;" },
]);
