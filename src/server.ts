import { findMinMaxSum } from "./algorithm/minimax-sum";

const innitServer = async (): Promise<void> => {
  const arr = [1, 3, 5, 7, 9];
  const [minSum, maxSum] = findMinMaxSum(arr);
  console.log(`${minSum} ${maxSum}`);
};

innitServer();
