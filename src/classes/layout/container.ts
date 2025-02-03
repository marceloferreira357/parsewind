import { clazzArrayToMap } from "../../common/utils";

export const container = clazzArrayToMap([
  {
    clazz: "container",
    properties: [
      { value: "width: 100%;" },
      { breakpoint: "sm", value: "max-width: 640px;" },
      { breakpoint: "md", value: "max-width: 768px;" },
      { breakpoint: "lg", value: "max-width: 1024px;" },
      { breakpoint: "xl", value: "max-width: 1280px;" },
      { breakpoint: "2xl", value: "max-width: 1536px;" },
    ],
  },
]);
