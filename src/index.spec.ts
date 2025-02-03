import { classes } from "./classes/classes";
import { pw } from "./index";

describe("pw function", () => {
  it("should return the joined class names", () => {
    const spy = jest.spyOn(classes, "get");
    const result = pw("container aspect-square");

    expect(result).toBe("width: 100%; aspect-ratio: 1 / 1;");
    expect(spy).toHaveBeenCalledTimes(2);

    spy.mockRestore();
  });
});
