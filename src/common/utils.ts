import { Clazz } from "./types";

export const clazzArrayToMap = (array: Clazz[]): Map<string, string> => {
  const map = new Map<string, string>();
  for (const { clazz, properties } of array) {
    map.set(clazz, properties);
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
