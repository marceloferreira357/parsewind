import { clazzArrayToMap } from "../../common/utils";

export const breakBefore = clazzArrayToMap([
  {
    clazz: "break-before-auto",
    properties: [{ value: "break-before: auto;" }],
  },
  {
    clazz: "break-before-avoid",
    properties: [{ value: "break-before: avoid;" }],
  },
  { clazz: "break-before-all", properties: [{ value: "break-before: all;" }] },
  {
    clazz: "break-before-avoid-page",
    properties: [{ value: "break-before: avoid-page;" }],
  },
  {
    clazz: "break-before-page",
    properties: [{ value: "break-before: page;" }],
  },
  {
    clazz: "break-before-left",
    properties: [{ value: "break-before: left;" }],
  },
  {
    clazz: "break-before-right",
    properties: [{ value: "break-before: right;" }],
  },
  {
    clazz: "break-before-column",
    properties: [{ value: "break-before: column;" }],
  },
]);
