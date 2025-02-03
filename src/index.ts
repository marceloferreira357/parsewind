import { classes } from "./classes";

const classCache = new Map<string, string>();

export const pw = (className: string) => {
  const splittedClassName = className.split(" ");
  const clazzes: string[] = [];

  for (const clazz of splittedClassName) {
    if (!classCache.has(clazz)) {
      classCache.set(clazz, classes.get(clazz)!);
    }
    clazzes.push(classCache.get(clazz)!);
  }

  return clazzes.join(" ");
};
