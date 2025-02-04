import { clazzArrayToMap } from "../../common/utils";

export const listStyleType = clazzArrayToMap([
  { clazz: "list-none", properties: "list-style-type: none;" },
  { clazz: "list-disc", properties: "list-style-type: disc;" },
  { clazz: "list-decimal", properties: "list-style-type: decimal;" },
]);
