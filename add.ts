export const add = (expression: string): number => {
  return expression.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
};
