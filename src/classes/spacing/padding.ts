import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const padding = clazzArrayToMap([
  { clazz: "p-px", properties: "padding: 1px;" },
  { clazz: "px-px", properties: "padding-left: 1px; padding-right: 1px;" },
  { clazz: "py-px", properties: "padding-top: 1px; padding-bottom: 1px;" },
  { clazz: "ps-px", properties: "padding-inline-start: 1px;" },
  { clazz: "pe-px", properties: "padding-inline-end: 1px;" },
  { clazz: "pt-px", properties: "padding-top: 1px;" },
  { clazz: "pr-px", properties: "padding-right: 1px;" },
  { clazz: "pb-px", properties: "padding-bottom: 1px;" },
  { clazz: "pl-px", properties: "padding-left: 1px;" },
  ...Object.entries(spacingScale).flatMap(([key, { rem, px }]) => [
    { clazz: `p-${key}`, properties: `padding: ${rem};` },
    {
      clazz: `px-${key}`,
      properties: `padding-left: ${px}; padding-right: ${px};`,
    },
    {
      clazz: `py-${key}`,
      properties: `padding-top: ${px}; padding-bottom: ${px};`,
    },
    { clazz: `ps-${key}`, properties: `padding-inline-start: ${px};` },
    { clazz: `pe-${key}`, properties: `padding-inline-end: ${px};` },
    { clazz: `pt-${key}`, properties: `padding-top: ${px};` },
    { clazz: `pr-${key}`, properties: `padding-right: ${px};` },
    { clazz: `pb-${key}`, properties: `padding-bottom: ${px};` },
    { clazz: `pl-${key}`, properties: `padding-left: ${px};` },
  ]),
]);
