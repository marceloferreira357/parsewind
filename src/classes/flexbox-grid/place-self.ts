import { clazzArrayToMap } from "../../common/utils";

export const placeSelf = clazzArrayToMap([
  { clazz: "place-self-auto", properties: "place-self: auto;" },
  { clazz: "place-self-start", properties: "place-self: start;" },
  { clazz: "place-self-end", properties: "place-self: end;" },
  { clazz: "place-self-center", properties: "place-self: center;" },
  { clazz: "place-self-stretch", properties: "place-self: stretch;" },
]);
