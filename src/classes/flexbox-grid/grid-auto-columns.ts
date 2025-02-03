import { clazzArrayToMap } from "../../common/utils";

export const gridAutoColumns = clazzArrayToMap([
  { clazz: "auto-cols-auto", properties: "grid-auto-columns: auto;" },
  { clazz: "auto-cols-min", properties: "grid-auto-columns: min-content;" },
  { clazz: "auto-cols-max", properties: "grid-auto-columns: max-content;" },
  { clazz: "auto-cols-fr", properties: "grid-auto-columns: minmax(0, 1fr);" },
]);
