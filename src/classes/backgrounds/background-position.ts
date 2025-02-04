import { clazzArrayToMap } from "../../common/utils";

export const backgroundPosition = clazzArrayToMap([
  { clazz: "bg-bottom", properties: "background-position: bottom;" },
  { clazz: "bg-center", properties: "background-position: center;" },
  { clazz: "bg-left", properties: "background-position: left;" },
  { clazz: "bg-left-bottom", properties: "background-position: left bottom;" },
  { clazz: "bg-left-top", properties: "background-position: left top;" },
  { clazz: "bg-right", properties: "background-position: right;" },
  {
    clazz: "bg-right-bottom",
    properties: "background-position: right bottom;",
  },
  { clazz: "bg-right-top", properties: "background-position: right top;" },
  { clazz: "bg-top", properties: "background-position: top;" },
]);
