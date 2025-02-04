import { clazzArrayToMap } from "../../common/utils";

export const textOverflow = clazzArrayToMap([
  {
    clazz: "truncate",
    properties:
      "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
  },
  { clazz: "text-ellipsis", properties: "text-overflow: ellipsis;" },
  { clazz: "text-clip", properties: "text-overflow: clip;" },
]);
