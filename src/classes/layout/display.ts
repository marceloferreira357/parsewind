import { clazzArrayToMap } from "../../common/utils";

export const display = clazzArrayToMap([
  { clazz: "block", properties: "display: block;" },
  { clazz: "inline-block", properties: "display: inline-block;" },
  { clazz: "inline", properties: "display: inline;" },
  { clazz: "flex", properties: "display: flex;" },
  { clazz: "inline-flex", properties: "display: inline-flex;" },
  { clazz: "table", properties: "display: table;" },
  { clazz: "inline-table", properties: "display: inline-table;" },
  {
    clazz: "table-caption",
    properties: "display: table-caption;",
  },
  { clazz: "table-cell", properties: "display: table-cell;" },
  { clazz: "table-column", properties: "display: table-column;" },
  {
    clazz: "table-column-group",
    properties: "display: table-column-group;",
  },
  {
    clazz: "table-footer-group",
    properties: "display: table-footer-group;",
  },
  {
    clazz: "table-header-group",
    properties: "display: table-header-group;",
  },
  {
    clazz: "table-row-group",
    properties: "display: table-row-group;",
  },
  { clazz: "table-row", properties: "display: table-row;" },
  { clazz: "flow-root", properties: "display: flow-root;" },
  { clazz: "grid", properties: "display: grid;" },
  { clazz: "inline-grid", properties: "display: inline-grid;" },
  { clazz: "contents", properties: "display: contents;" },
  { clazz: "list-item", properties: "display: list-item;" },
  { clazz: "hidden", properties: "display: none;" },
]);
