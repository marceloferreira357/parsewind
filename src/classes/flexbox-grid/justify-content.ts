import { clazzArrayToMap } from "../../common/utils";

export const justifyContent = clazzArrayToMap([
  { clazz: "justify-normal", properties: "justify-content: normal;" },
  { clazz: "justify-start", properties: "justify-content: flex-start;" },
  { clazz: "justify-end", properties: "justify-content: flex-end;" },
  { clazz: "justify-center", properties: "justify-content: center;" },
  { clazz: "justify-between", properties: "justify-content: space-between;" },
  { clazz: "justify-around", properties: "justify-content: space-around;" },
  { clazz: "justify-evenly", properties: "justify-content: space-evenly;" },
  { clazz: "justify-stretch", properties: "justify-content: stretch;" },
]);
