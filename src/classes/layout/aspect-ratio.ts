import { clazzArrayToMap } from "../../common/utils";

export const aspectRatio = clazzArrayToMap([
  { clazz: "aspect-auto", properties: [{ value: "aspect-ratio: auto;" }] },
  { clazz: "aspect-square", properties: [{ value: "aspect-ratio: 1 / 1;" }] },
  { clazz: "aspect-video", properties: [{ value: "aspect-ratio: 16 / 9;" }] },
]);
