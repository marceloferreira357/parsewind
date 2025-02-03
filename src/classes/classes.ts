import { createClazzArray } from "../common/utils";
import { aspectRatio } from "./layout/aspect-ratio";
import { container } from "./layout/container";

const aspectRatioMap = new Map(createClazzArray(aspectRatio));
const containerMap = new Map(createClazzArray(container));

export const classes = new Map([...aspectRatioMap, ...containerMap]);
