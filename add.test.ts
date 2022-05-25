import { add } from "./add";

describe("testing add function", () => {
  it("should add numbers in comma separated list", () => {
    expect(add("1,2,3")).toBe(6);
  });
});
