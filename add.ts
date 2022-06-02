export const add = (
  expression: string,
  logger: (number: number) => any
): number => {
  try {
    const numbers = parcer(expression);
    const ans = reduce(numbers, simpleAdd, 0);
    logger(ans);
    return ans;
  } catch (error) {
    if (error instanceof EmptyStringError) {
      logger(0);
      return 0;
    } else {
      throw error;
    }
  }
};

export const multiply = (
  expression: string,
  logger: (number: number) => any
): number => {
  try {
    const numbers = parcer(expression);
    const ans = reduce(numbers, simpleProduct, 1);
    logger(ans);
    return ans;
  } catch (error) {
    if (error instanceof EmptyStringError) {
      logger(0);
      return 0;
    } else {
      throw error;
    }
  }
};

const simpleAdd = (a: number, b: number) => a + b;

const simpleProduct = (a: number, b: number) => a * b;

export const parcer = (
  expression: string,
  defaultDelimiter = ","
): number[] => {
  if (!expression) {
    throw new EmptyStringError("expression is empty");
  }
  const negativeNumbers = expression.match(/\-[0-9]{1,}/g);
  if (negativeNumbers?.length) {
    throw new Error("negatives not allowed: " + negativeNumbers?.join(","));
  }
  let delimiter = defaultDelimiter;
  let numbers = expression;
  if (expression.startsWith("//")) {
    const delimiterIndex = expression.indexOf("\n");
    delimiter = expression.substring(2, delimiterIndex);
    numbers = expression.substring(delimiterIndex + 1);
  }
  const numberArray = numbers.split(delimiter).map((n) => {
    if (n.match("\n")) {
      return n.split("\n").map((num) => Number(num.replace(/\_/g, "")));
    } else {
      return Number(n.replace(/\_/g, ""));
    }
  });
  return numberArray.flat();
};

export const reduce = (
  numbers: number[],
  cb: (a: number, b: number) => number,
  initialValue: number
) => numbers.reduce((acc, curr) => cb(acc, curr), initialValue);

export class EmptyStringError extends Error {}
