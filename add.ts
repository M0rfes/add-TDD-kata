export const add = (expression: string, delimiter = ","): number => {
  if (expression === "") {
    return 0;
  }
  const numbers = expression.split(delimiter);
  if (numbers.length === 1) {
    return Number(numbers[0]);
  }
  return numbers.reduce((acc, curr) => {
    const parcedCurr = add(curr, "\n");
    return acc + parcedCurr;
  }, 0);
};
