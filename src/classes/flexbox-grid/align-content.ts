import { clazzArrayToMap } from "../../common/utils";

export const alignContent = clazzArrayToMap([
  { clazz: "content-normal", properties: "align-content: normal;" },
  { clazz: "content-center", properties: "align-content: center;" },
  { clazz: "content-start", properties: "align-content: flex-start;" },
  { clazz: "content-end", properties: "align-content: flex-end;" },
  { clazz: "content-between", properties: "align-content: space-between;" },
  { clazz: "content-around", properties: "align-content: space-around;" },
  { clazz: "content-evenly", properties: "align-content: space-evenly;" },
  { clazz: "content-baseline", properties: "align-content: baseline;" },
  { clazz: "content-stretch", properties: "align-content: stretch;" },
]);
