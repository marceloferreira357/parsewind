import { clazzArrayToMap } from "../../common/utils";

export const overscrollBehavior = clazzArrayToMap([
  {
    clazz: "overscroll-auto",
    properties: "overscroll-behavior: auto;",
  },
  {
    clazz: "overscroll-contain",
    properties: "overscroll-behavior: contain;",
  },
  {
    clazz: "overscroll-none",
    properties: "overscroll-behavior: none;",
  },
  {
    clazz: "overscroll-y-auto",
    properties: "overscroll-behavior-y: auto;",
  },
  {
    clazz: "overscroll-y-contain",
    properties: "overscroll-behavior-y: contain;",
  },
  {
    clazz: "overscroll-y-none",
    properties: "overscroll-behavior-y: none;",
  },
  {
    clazz: "overscroll-x-auto",
    properties: "overscroll-behavior-x: auto;",
  },
  {
    clazz: "overscroll-x-contain",
    properties: "overscroll-behavior-x: contain;",
  },
  {
    clazz: "overscroll-x-none",
    properties: "overscroll-behavior-x: none;",
  },
]);
