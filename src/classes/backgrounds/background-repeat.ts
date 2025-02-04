import { clazzArrayToMap } from "../../common/utils";

export const backgroundRepeat = clazzArrayToMap([
  { clazz: "bg-repeat", properties: "background-repeat: repeat;" },
  { clazz: "bg-no-repeat", properties: "background-repeat: no-repeat;" },
  { clazz: "bg-repeat-x", properties: "background-repeat: repeat-x;" },
  { clazz: "bg-repeat-y", properties: "background-repeat: repeat-y;" },
  { clazz: "bg-repeat-round", properties: "background-repeat: round;" },
  { clazz: "bg-repeat-space", properties: "background-repeat: space;" },
]);
