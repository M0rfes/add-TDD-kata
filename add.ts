export const add = (expression: string): number => {
  if (expression === "") {
    return 0;
  }
  return expression.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
};
