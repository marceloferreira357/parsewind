import { clazzArrayToMap } from "../../common/utils";

export const fontWeight = clazzArrayToMap([
  {
    clazz: "font-thin",
    properties: "font-weight: 100;",
  },
  {
    clazz: "font-extralight",
    properties: "font-weight: 200;",
  },
  {
    clazz: "font-light",
    properties: "font-weight: 300;",
  },
  {
    clazz: "font-normal",
    properties: "font-weight: 400;",
  },
  {
    clazz: "font-medium",
    properties: "font-weight: 500;",
  },
  {
    clazz: "font-semibold",
    properties: "font-weight: 600;",
  },
  {
    clazz: "font-bold",
    properties: "font-weight: 700;",
  },
  {
    clazz: "font-extrabold",
    properties: "font-weight: 800;",
  },
  {
    clazz: "font-black",
    properties: "font-weight: 900;",
  },
]);
