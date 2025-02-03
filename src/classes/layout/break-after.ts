import { clazzArrayToMap } from "../../common/utils";

export const breakAfter = clazzArrayToMap([
  { clazz: "break-after-auto", properties: [{ value: "break-after: auto;" }] },
  {
    clazz: "break-after-avoid",
    properties: [{ value: "break-after: avoid;" }],
  },
  { clazz: "break-after-all", properties: [{ value: "break-after: all;" }] },
  {
    clazz: "break-after-avoid-page",
    properties: [{ value: "break-after: avoid-page;" }],
  },
  { clazz: "break-after-page", properties: [{ value: "break-after: page;" }] },
  { clazz: "break-after-left", properties: [{ value: "break-after: left;" }] },
  {
    clazz: "break-after-right",
    properties: [{ value: "break-after: right;" }],
  },
  {
    clazz: "break-after-column",
    properties: [{ value: "break-after: column;" }],
  },
]);
