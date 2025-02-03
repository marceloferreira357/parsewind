import { clazzArrayToMap } from "../../common/utils";

export const placeContent = clazzArrayToMap([
  { clazz: "place-content-center", properties: "place-content: center;" },
  { clazz: "place-content-start", properties: "place-content: start;" },
  { clazz: "place-content-end", properties: "place-content: end;" },
  {
    clazz: "place-content-between",
    properties: "place-content: space-between;",
  },
  { clazz: "place-content-around", properties: "place-content: space-around;" },
  { clazz: "place-content-evenly", properties: "place-content: space-evenly;" },
  { clazz: "place-content-baseline", properties: "place-content: baseline;" },
  { clazz: "place-content-stretch", properties: "place-content: stretch;" },
]);
