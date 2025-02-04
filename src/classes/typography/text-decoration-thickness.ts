import { clazzArrayToMap } from "../../common/utils";

export const textDecorationThickness = clazzArrayToMap([
  { clazz: "decoration-auto", properties: "text-decoration-thickness: auto;" },
  {
    clazz: "decoration-from-font",
    properties: "text-decoration-thickness: from-font;",
  },
  { clazz: "decoration-0", properties: "text-decoration-thickness: 0px;" },
  { clazz: "decoration-1", properties: "text-decoration-thickness: 1px;" },
  { clazz: "decoration-2", properties: "text-decoration-thickness: 2px;" },
  { clazz: "decoration-4", properties: "text-decoration-thickness: 4px;" },
  { clazz: "decoration-8", properties: "text-decoration-thickness: 8px;" },
]);
