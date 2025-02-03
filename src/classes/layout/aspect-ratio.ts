import { clazzArrayToMap } from "../../common/utils";

export const aspectRatio = clazzArrayToMap([
  { clazz: "aspect-auto", properties: "aspect-ratio: auto;" },
  { clazz: "aspect-square", properties: "aspect-ratio: 1 / 1;" },
  { clazz: "aspect-video", properties: "aspect-ratio: 16 / 9;" },
]);
