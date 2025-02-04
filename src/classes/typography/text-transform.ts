import { clazzArrayToMap } from "../../common/utils";

export const textTransform = clazzArrayToMap([
  { clazz: "uppercase", properties: "text-transform: uppercase;" },
  { clazz: "lowercase", properties: "text-transform: lowercase;" },
  { clazz: "capitalize", properties: "text-transform: capitalize;" },
  { clazz: "normal-case", properties: "text-transform: none;" },
]);
