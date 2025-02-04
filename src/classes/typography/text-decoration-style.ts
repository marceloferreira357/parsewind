import { clazzArrayToMap } from "../../common/utils";

export const textDecorationStyles = clazzArrayToMap([
  { clazz: "decoration-solid", properties: "text-decoration-style: solid;" },
  { clazz: "decoration-double", properties: "text-decoration-style: double;" },
  { clazz: "decoration-dotted", properties: "text-decoration-style: dotted;" },
  { clazz: "decoration-dashed", properties: "text-decoration-style: dashed;" },
  { clazz: "decoration-wavy", properties: "text-decoration-style: wavy;" },
]);
