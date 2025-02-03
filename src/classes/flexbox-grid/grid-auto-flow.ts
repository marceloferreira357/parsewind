import { clazzArrayToMap } from "../../common/utils";

export const gridAutoFlow = clazzArrayToMap([
  { clazz: "grid-flow-row", properties: "grid-auto-flow: row;" },
  { clazz: "grid-flow-col", properties: "grid-auto-flow: column;" },
  { clazz: "grid-flow-dense", properties: "grid-auto-flow: dense;" },
  { clazz: "grid-flow-row-dense", properties: "grid-auto-flow: row dense;" },
  { clazz: "grid-flow-col-dense", properties: "grid-auto-flow: column dense;" },
]);
