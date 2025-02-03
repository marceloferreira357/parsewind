import { clazzArrayToMap } from "../../common/utils";

export const breakAfter = clazzArrayToMap([
  { clazz: "break-after-auto", properties: "break-after: auto;" },
  {
    clazz: "break-after-avoid",
    properties: "break-after: avoid;",
  },
  { clazz: "break-after-all", properties: "break-after: all;" },
  {
    clazz: "break-after-avoid-page",
    properties: "break-after: avoid-page;",
  },
  { clazz: "break-after-page", properties: "break-after: page;" },
  { clazz: "break-after-left", properties: "break-after: left;" },
  {
    clazz: "break-after-right",
    properties: "break-after: right;",
  },
  {
    clazz: "break-after-column",
    properties: "break-after: column;",
  },
]);
