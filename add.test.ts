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

  it("should let user define delimiter between '//' and '/n'", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should fail for negative numbers", () => {
    const t = () => add("-1,2,3,-4");
    expect(t).toThrow(Error);
    expect(t).toThrow("negatives not allowed: -1,-4");
  });
});
