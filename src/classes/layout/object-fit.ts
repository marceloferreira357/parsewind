import { clazzArrayToMap } from "../../common/utils";

export const objectFit = clazzArrayToMap([
  { clazz: "object-contain", properties: "object-fit: contain;" },
  { clazz: "object-cover", properties: "object-fit: cover;" },
  { clazz: "object-fill", properties: "object-fit: fill;" },
  { clazz: "object-none", properties: "object-fit: none;" },
  {
    clazz: "object-scale-down",
    properties: "object-fit: scale-down;",
  },
]);
