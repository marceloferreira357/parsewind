import { clazzArrayToMap } from "../../common/utils";

export const gridAutoRows = clazzArrayToMap([
  { clazz: "auto-rows-auto", properties: "grid-auto-rows: auto;" },
  { clazz: "auto-rows-min", properties: "grid-auto-rows: min-content;" },
  { clazz: "auto-rows-max", properties: "grid-auto-rows: max-content;" },
  { clazz: "auto-rows-fr", properties: "grid-auto-rows: minmax(0, 1fr);" },
]);
