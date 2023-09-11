const findMinMaxSum = (arr: number[]) => {
  arr.sort((a, b) => a - b);
  // tổng min
  const minSum = arr.slice(0, 4).reduce((a, b) => a + b);
  // tổng max
  const maxSum = arr.slice(1).reduce((a, b) => a + b);
  return [minSum, maxSum];
};
export { findMinMaxSum };
