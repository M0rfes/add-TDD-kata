import { add, EmptyStringError, multiply, parcer, reduce } from "./add";

describe("testing add function", () => {
  let logger: (number: number) => any;

  beforeEach(() => {
    logger = jest.fn();
  });

  it("should reduce the number list with give call back and initial value", () => {
    const numbers = [1, 2, 3, 4, 5];
    const initialValue = 0;
    const cb = (a: number, b: number) => a + b;
    const ans = reduce(numbers, cb, initialValue);
    expect(ans).toBe(15);
  });

  it("should return initial value for empty list", () => {
    const numbers = [] as number[];
    const initialValue = 0;
    const cb = (a: number, b: number) => a + b;
    const ans = reduce(numbers, cb, initialValue);
    expect(ans).toBe(0);
  });

  it("should should return number list for 1,2,3,4", () => {
    expect(parcer("1,2,3,4")).toEqual([1, 2, 3, 4]);
  });

  it("should should return number list for 1,2\n3\n4,5", () => {
    expect(parcer("1,2\n3\n4,5")).toEqual([1, 2, 3, 4, 5]);
  });

  it("should use char in between // and \n as delimiter", () => {
    expect(parcer("//;\n1;2;3")).toEqual([1, 2, 3]);
  });

  it("should fail for negative numbers", () => {
    const t = () => parcer("-1,2,3,-4");
    expect(t).toThrow(Error);
    expect(t).toThrow("negatives not allowed: -1,-4");
  });

  it("should throw for empty string for empty string", () => {
    const t = () => parcer("");
    expect(t).toThrow(EmptyStringError);
    expect(t).toThrow("expression is empty");
  });
});
