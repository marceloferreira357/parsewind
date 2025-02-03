import { Clazz } from "./types";

export const clazzArrayToMap = (array: Clazz[]): Map<string, string> => {
  const map = new Map<string, string>();
  for (const { clazz, properties } of array) {
    for (const { breakpoint, value } of properties) {
      const key = breakpoint ? `${breakpoint}:${clazz}` : clazz;
      map.set(key, value);
    }
  }
  return map;
};

export const createClazzArray = (
  classes: Map<string, string>
): [string, string][] => {
  const result: [string, string][] = [];
  classes.forEach((value, key) => {
    result.push([key, value]);
  });
  return result;
};
