import { clazzArrayToMap } from "../../common/utils";

export const breakBefore = clazzArrayToMap([
  {
    clazz: "break-before-auto",
    properties: "break-before: auto;",
  },
  {
    clazz: "break-before-avoid",
    properties: "break-before: avoid;",
  },
  { clazz: "break-before-all", properties: "break-before: all;" },
  {
    clazz: "break-before-avoid-page",
    properties: "break-before: avoid-page;",
  },
  {
    clazz: "break-before-page",
    properties: "break-before: page;",
  },
  {
    clazz: "break-before-left",
    properties: "break-before: left;",
  },
  {
    clazz: "break-before-right",
    properties: "break-before: right;",
  },
  {
    clazz: "break-before-column",
    properties: "break-before: column;",
  },
]);
