import { clazzArrayToMap } from "../../common/utils";

export const objectPosition = clazzArrayToMap([
  {
    clazz: "object-bottom",
    properties: "object-position: bottom;",
  },
  {
    clazz: "object-center",
    properties: "object-position: center;",
  },
  { clazz: "object-left", properties: "object-position: left;" },
  {
    clazz: "object-left-bottom",
    properties: "object-position: left bottom;",
  },
  {
    clazz: "object-left-top",
    properties: "object-position: left top;",
  },
  { clazz: "object-right", properties: "object-position: right;" },
  {
    clazz: "object-right-bottom",
    properties: "object-position: right bottom;",
  },
  {
    clazz: "object-right-top",
    properties: "object-position: right top;",
  },
  { clazz: "object-top", properties: "object-position: top;" },
]);
