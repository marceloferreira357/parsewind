import { classes } from "./classes";
import { pw } from "./index";

describe("pw function", () => {
  it("should return the joined class names", () => {
    const spy = jest.spyOn(classes, "get");
    const result = pw("container aspect-square bottom-auto");

    expect(result).toBe("width: 100%; aspect-ratio: 1 / 1; bottom: auto;");
    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockRestore();
  });
});
