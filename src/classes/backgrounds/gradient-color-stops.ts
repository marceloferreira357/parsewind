import { colorPalette } from "../../common/constants";
import { clazzArrayToMap } from "../../common/utils";

export const gradientColorStops = clazzArrayToMap([
  {
    clazz: "from-inherit",
    properties:
      "--tw-gradient-from: inherit var(--tw-gradient-from-position); --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);",
  },
  {
    clazz: "from-current",
    properties:
      "--tw-gradient-from: currentColor var(--tw-gradient-from-position); --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);",
  },
  {
    clazz: "from-transparent",
    properties:
      "--tw-gradient-from: transparent var(--tw-gradient-from-position); --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);",
  },
  ...Object.entries(colorPalette).flatMap(([key, { color }]) => ({
    clazz: `from-${key}`,
    properties: `--tw-gradient-from: ${color} var(--tw-gradient-from-position); --tw-gradient-to: ${color.replace(
      ")",
      " / 0)"
    )} var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);`,
  })),
  ...Array.from({ length: 21 }, (_, i) => i * 5).map((percent) => ({
    clazz: `from-${percent}%`,
    properties: `--tw-gradient-from-position: ${percent}%;`,
  })),
  {
    clazz: "via-inherit",
    properties:
      "--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), inherit var(--tw-gradient-via-position), var(--tw-gradient-to);",
  },
  {
    clazz: "via-current",
    properties:
      "--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), currentColor var(--tw-gradient-via-position), var(--tw-gradient-to);",
  },
  {
    clazz: "via-transparent",
    properties:
      "--tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);",
  },
  ...Object.entries(colorPalette).flatMap(([key, { color }]) => ({
    clazz: `via-${key}`,
    properties: `--tw-gradient-to: ${color.replace(
      ")",
      " / 0)"
    )} var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);`,
  })),
  ...Array.from({ length: 21 }, (_, i) => i * 5).map((percent) => ({
    clazz: `via-${percent}%`,
    properties: `---tw-gradient-via-position: ${percent}%;`,
  })),
  {
    clazz: "to-inherit",
    properties: "--tw-gradient-to: inherit var(--tw-gradient-to-position);",
  },
  {
    clazz: "to-current",
    properties:
      "--tw-gradient-to: currentColor var(--tw-gradient-to-position);",
  },
  {
    clazz: "to-transparent",
    properties: "--tw-gradient-to: transparent var(--tw-gradient-to-position);",
  },
  ...Object.entries(colorPalette).flatMap(([key, { color }]) => ({
    clazz: `to-${key}`,
    properties: `--tw-gradient-to: ${color} var(--tw-gradient-to-position);`,
  })),
  ...Array.from({ length: 21 }, (_, i) => i * 5).map((percent) => ({
    clazz: `to-${percent}%`,
    properties: `--tw-gradient-to-position: ${percent}%;`,
  })),
]);
