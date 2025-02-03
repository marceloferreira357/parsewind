import { clazzArrayToMap } from "../../common/utils";

export const boxDecorationBreak = clazzArrayToMap([
  {
    clazz: "box-decoration-clone",
    properties: "box-decoration-break: clone;",
  },
  {
    clazz: "box-decoration-slice",
    properties: "box-decoration-break: slice;",
  },
]);
