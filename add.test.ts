import { add } from "./add";

describe("testing add function", () => {
  it("should add numbers in comma separated list", () => {
    expect(add("1,2,3")).toBe(6);
  });

  it("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should work with , and /\n", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
