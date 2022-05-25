export const add = (expression: string): number => {
  const negativeNumbers = expression.match(/\-[0-9]{1,}/g);
  if (negativeNumbers?.length) {
    throw new Error("negatives not allowed: " + negativeNumbers?.join(","));
  }
  let delimiter = ",";
  let numbers = expression;
  if (expression.startsWith("//")) {
    const delimiterIndex = expression.indexOf("\n");
    delimiter = expression.substring(2, delimiterIndex);
    numbers = expression.substring(delimiterIndex + 1);
  }
  return _add(numbers, delimiter);
};

const _add = (expression: string, delimiter: string): number => {
  if (expression === "") {
    return 0;
  }
  const numbers = expression.split(delimiter);
  if (numbers.length === 1) {
    return Number(numbers[0]);
  }
  return numbers.reduce((acc, curr) => {
    const parcedCurr = _add(curr, "\n");
    return acc + parcedCurr;
  }, 0);
};
