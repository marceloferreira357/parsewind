import { clazzArrayToMap } from "../../common/utils";

export const fontVariantNumeric = clazzArrayToMap([
  {
    clazz: "normal-nums",
    properties: "font-variant-numeric: normal;",
  },
  {
    clazz: "ordinal",
    properties: "font-variant-numeric: ordinal;",
  },
  {
    clazz: "slashed-zero",
    properties: "font-variant-numeric: slashed-zero;",
  },
  {
    clazz: "lining-nums",
    properties: "font-variant-numeric: lining-nums;",
  },
  {
    clazz: "oldstyle-nums",
    properties: "font-variant-numeric: oldstyle-nums;",
  },
  {
    clazz: "proportional-nums",
    properties: "font-variant-numeric: proportional-nums;",
  },
  {
    clazz: "tabular-nums",
    properties: "font-variant-numeric: tabular-nums;",
  },
  {
    clazz: "diagonal-fractions",
    properties: "font-variant-numeric: diagonal-fractions;",
  },
  {
    clazz: "stacked-fractions",
    properties: "font-variant-numeric: stacked-fractions;",
  },
]);
