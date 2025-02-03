import { clazzArrayToMap } from "../../common/utils";

export const gridTemplateColumns = clazzArrayToMap([
  {
    clazz: "grid-cols-1",
    properties: "grid-template-columns: repeat(1, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-2",
    properties: "grid-template-columns: repeat(2, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-3",
    properties: "grid-template-columns: repeat(3, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-4",
    properties: "grid-template-columns: repeat(4, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-5",
    properties: "grid-template-columns: repeat(5, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-6",
    properties: "grid-template-columns: repeat(6, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-7",
    properties: "grid-template-columns: repeat(7, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-8",
    properties: "grid-template-columns: repeat(8, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-9",
    properties: "grid-template-columns: repeat(9, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-10",
    properties: "grid-template-columns: repeat(10, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-11",
    properties: "grid-template-columns: repeat(11, minmax(0, 1fr));",
  },
  {
    clazz: "grid-cols-12",
    properties: "grid-template-columns: repeat(12, minmax(0, 1fr));",
  },
  { clazz: "grid-cols-none", properties: "grid-template-columns: none;" },
  { clazz: "grid-cols-subgrid", properties: "grid-template-columns: subgrid;" },
]);
