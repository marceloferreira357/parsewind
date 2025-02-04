import { clazzArrayToMap } from "../../common/utils";

export const backgroundImage = clazzArrayToMap([
  { clazz: "bg-none", properties: "background-image: none;" },
  {
    clazz: "bg-gradient-to-t",
    properties:
      "background-image: linear-gradient(to top, var(--tw-gradient-stops));",
  },
  {
    clazz: "bg-gradient-to-tr",
    properties:
      "background-image: linear-gradient(to top right, var(--tw-gradient-stops));",
  },
  {
    clazz: "bg-gradient-to-r",
    properties:
      "background-image: linear-gradient(to right, var(--tw-gradient-stops));",
  },
  {
    clazz: "bg-gradient-to-br",
    properties:
      "background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));",
  },
  {
    clazz: "bg-gradient-to-b",
    properties:
      "background-image: linear-gradient(to bottom, var(--tw-gradient-stops));",
  },
  {
    clazz: "bg-gradient-to-bl",
    properties:
      "background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));",
  },
  {
    clazz: "bg-gradient-to-l",
    properties:
      "background-image: linear-gradient(to left, var(--tw-gradient-stops));",
  },
  {
    clazz: "bg-gradient-to-tl",
    properties:
      "background-image: linear-gradient(to top left, var(--tw-gradient-stops));",
  },
]);
