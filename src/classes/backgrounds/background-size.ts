import { clazzArrayToMap } from "../../common/utils";

export const backgroundSize = clazzArrayToMap([
  { clazz: "bg-auto", properties: "background-size: auto;" },
  { clazz: "bg-cover", properties: "background-size: cover;" },
  { clazz: "bg-contain", properties: "background-size: contain;" },
]);
