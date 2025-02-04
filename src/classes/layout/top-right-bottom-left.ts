import { percentageSpacingScale, spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const topRightBottomLeft = clazzArrayToMap([
  { clazz: "inset-px", properties: "inset: 1px;" },
  { clazz: "inset-x-px", properties: "left: 1px; right: 1px;" },
  { clazz: "inset-y-px", properties: "top: 1px; bottom: 1px;" },
  { clazz: "start-px", properties: "inset-inline-start: 1px;" },
  { clazz: "end-px", properties: "inset-inline-end: 1px;" },
  { clazz: "top-px", properties: "top: 1px;" },
  { clazz: "right-px", properties: "right: 1px;" },
  { clazz: "bottom-px", properties: "bottom: 1px;" },
  { clazz: "left-px", properties: "left: 1px;" },
  ...Object.entries(spacingScale).flatMap(([key, { rem, px }]) => [
    { clazz: `inset-${key}`, properties: `inset: ${rem};` },
    { clazz: `inset-x-${key}`, properties: `left: ${px}; right: ${px};` },
    { clazz: `inset-y-${key}`, properties: `top: ${px}; bottom: ${px};` },
    { clazz: `start-${key}`, properties: `inset-inline-start: ${px};` },
    { clazz: `end-${key}`, properties: `inset-inline-end: ${px};` },
    { clazz: `top-${key}`, properties: `top: ${px};` },
    { clazz: `right-${key}`, properties: `right: ${px};` },
    { clazz: `bottom-${key}`, properties: `bottom: ${px};` },
    { clazz: `left-${key}`, properties: `left: ${px};` },
  ]),
  { clazz: "inset-auto", properties: "inset: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `inset-${key}`,
      properties: `inset: ${percentage};`,
    })),
  { clazz: "inset-full", properties: "inset: 100%;" },
  { clazz: "inset-x-auto", properties: "left: auto; right: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `inset-x-${key}`,
      properties: `left: ${percentage}; right: ${percentage};`,
    })),
  { clazz: "inset-x-full", properties: "left: 100%; right: 100%;" },
  { clazz: "inset-y-auto", properties: "top: auto; bottom: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `inset-y-${key}`,
      properties: `top: ${percentage}; bottom: ${percentage};`,
    })),
  { clazz: "inset-y-full", properties: "top: 100%; bottom: 100%;" },
  { clazz: "start-auto", properties: "inset-inline-start: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `start-${key}`,
      properties: `inset-inline-start: ${percentage};`,
    })),
  { clazz: "start-full", properties: "inset-inline-start: 100%;" },
  { clazz: "end-auto", properties: "inset-inline-end: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `end-${key}`,
      properties: `inset-inline-end: ${percentage};`,
    })),
  { clazz: "end-full", properties: "inset-inline-end: 100%;" },
  { clazz: "top-auto", properties: "top: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `top-${key}`,
      properties: `top: ${percentage};`,
    })),
  { clazz: "top-full", properties: "top: 100%;" },
  { clazz: "right-auto", properties: "right: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `right-${key}`,
      properties: `right: ${percentage};`,
    })),
  { clazz: "right-full", properties: "right: 100%;" },
  { clazz: "bottom-auto", properties: "bottom: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `bottom-${key}`,
      properties: `bottom: ${percentage};`,
    })),
  { clazz: "bottom-full", properties: "bottom: 100%;" },
  { clazz: "left-auto", properties: "left: auto;" },
  ...Object.entries(percentageSpacingScale)
    .filter(([key]) => ["1/2", "1/3", "2/3", "1/4", "2/4", "3/4"].includes(key))
    .flatMap(([key, { percentage }]) => ({
      clazz: `left-${key}`,
      properties: `left: ${percentage};`,
    })),
  { clazz: "left-full", properties: "left: 100%;" },
]);
