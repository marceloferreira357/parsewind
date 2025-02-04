import { spacingScale } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const margin = clazzArrayToMap([
  { clazz: "m-px", properties: "margin: 1px;" },
  { clazz: "mx-px", properties: "margin-left: 1px; margin-right: 1px;" },
  { clazz: "my-px", properties: "margin-top: 1px; margin-bottom: 1px;" },
  { clazz: "ms-px", properties: "margin-inline-start: 1px;" },
  { clazz: "me-px", properties: "margin-inline-end: 1px;" },
  { clazz: "mt-px", properties: "margin-top: 1px;" },
  { clazz: "mr-px", properties: "margin-right: 1px;" },
  { clazz: "mb-px", properties: "margin-bottom: 1px;" },
  { clazz: "ml-px", properties: "margin-left: 1px;" },
  { clazz: "m-auto", properties: "margin: auto;" },
  { clazz: "mx-auto", properties: "margin-left: auto; margin-right: auto;" },
  { clazz: "my-auto", properties: "margin-top: auto; margin-bottom: auto;" },
  { clazz: "ms-auto", properties: "margin-inline-start: auto;" },
  { clazz: "me-auto", properties: "margin-inline-end: auto;" },
  { clazz: "mt-auto", properties: "margin-top: auto;" },
  { clazz: "mr-auto", properties: "margin-right: auto;" },
  { clazz: "mb-auto", properties: "margin-bottom: auto;" },
  { clazz: "ml-auto", properties: "margin-left: auto;" },
  ...Object.entries(spacingScale).flatMap(([key, { rem, px }]) => [
    { clazz: `m-${key}`, properties: `margin: ${rem};` },
    {
      clazz: `mx-${key}`,
      properties: `margin-left: ${px}; margin-right: ${px};`,
    },
    {
      clazz: `my-${key}`,
      properties: `margin-top: ${px}; margin-bottom: ${px};`,
    },
    { clazz: `ms-${key}`, properties: `margin-inline-start: ${px};` },
    { clazz: `me-${key}`, properties: `margin-inline-end: ${px};` },
    { clazz: `mt-${key}`, properties: `margin-top: ${px};` },
    { clazz: `mr-${key}`, properties: `margin-right: ${px};` },
    { clazz: `mb-${key}`, properties: `margin-bottom: ${px};` },
    { clazz: `ml-${key}`, properties: `margin-left: ${px};` },
  ]),
]);
