import { clazzArrayToMap } from "../../common/utils";

export const verticalAlign = clazzArrayToMap([
  { clazz: "align-baseline", properties: "vertical-align: baseline;" },
  { clazz: "align-top", properties: "vertical-align: top;" },
  { clazz: "align-middle", properties: "vertical-align: middle;" },
  { clazz: "align-bottom", properties: "vertical-align: bottom;" },
  { clazz: "align-text-top", properties: "vertical-align: text-top;" },
  { clazz: "align-text-bottom", properties: "vertical-align: text-bottom;" },
  { clazz: "align-sub", properties: "vertical-align: sub;" },
  { clazz: "align-super", properties: "vertical-align: super;" },
]);
