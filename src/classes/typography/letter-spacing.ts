import { clazzArrayToMap } from "../../common/utils";

export const letterSpacing = clazzArrayToMap([
  { clazz: "tracking-tighter", properties: "letter-spacing: -0.05em;" },
  { clazz: "tracking-tight", properties: "letter-spacing: -0.025em;" },
  { clazz: "tracking-normal", properties: "letter-spacing: 0em;" },
  { clazz: "tracking-wide", properties: "letter-spacing: 0.025em;" },
  { clazz: "tracking-wider", properties: "letter-spacing: 0.05em;" },
  { clazz: "tracking-widest", properties: "letter-spacing: 0.1em;" },
]);
