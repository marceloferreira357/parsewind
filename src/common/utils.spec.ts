import { Clazz } from "./types";
import { clazzArrayToMap, createClazzArray } from "./utils";

describe("clazzArrayToMap", () => {
  it("should convert an array of Clazz to a Map correctly", () => {
    const inputArray: Clazz[] = [
      {
        clazz: "class1",
        properties: [
          { breakpoint: "sm", value: "value1" },
          { breakpoint: "md", value: "value2" },
        ],
      },
      {
        clazz: "class2",
        properties: [
          { breakpoint: "lg", value: "value3" },
          { breakpoint: "", value: "value4" },
        ],
      },
    ];

    const expectedMap = new Map<string, string>([
      ["sm:class1", "value1"],
      ["md:class1", "value2"],
      ["lg:class2", "value3"],
      ["class2", "value4"],
    ]);

    expect(clazzArrayToMap(inputArray)).toEqual(expectedMap);
  });

  it("should handle an empty array", () => {
    const inputArray: Clazz[] = [];
    const expectedMap = new Map<string, string>();

    expect(clazzArrayToMap(inputArray)).toEqual(expectedMap);
  });

  it("should handle properties without breakpoints", () => {
    const inputArray: Clazz[] = [
      {
        clazz: "class1",
        properties: [{ breakpoint: "", value: "value1" }],
      },
    ];

    const expectedMap = new Map<string, string>([["class1", "value1"]]);

    expect(clazzArrayToMap(inputArray)).toEqual(expectedMap);
  });
});

describe("createClazzArray", () => {
  it("should convert a Map to an array of tuples", () => {
    const inputMap = new Map<string, string>([
      ["sm:class1", "value1"],
      ["md:class1", "value2"],
      ["lg:class2", "value3"],
      ["class2", "value4"],
    ]);

    const expectedArray: [string, string][] = [
      ["sm:class1", "value1"],
      ["md:class1", "value2"],
      ["lg:class2", "value3"],
      ["class2", "value4"],
    ];

    expect(createClazzArray(inputMap)).toEqual(expectedArray);
  });

  it("should return an empty array for an empty Map", () => {
    const inputMap = new Map<string, string>();
    const expectedArray: [string, string][] = [];

    expect(createClazzArray(inputMap)).toEqual(expectedArray);
  });
});
