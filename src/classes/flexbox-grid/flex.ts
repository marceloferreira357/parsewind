import { clazzArrayToMap } from "../../common/utils";

export const flex = clazzArrayToMap([
  { clazz: "flex-1", properties: "flex: 1 1 0%;" },
  { clazz: "flex-auto", properties: "flex: 1 1 auto;" },
  { clazz: "flex-initial", properties: "flex: 0 1 auto;" },
  { clazz: "flex-none", properties: "flex: none;" },
]);
