function solution(A) {
  let count = 0;
  const sums = {};
  let prevSum = -1;
  for (let i = 0; i < A.length - 1; i++) {
    const currentSum = A[i] + A[i + 1];
    console.log("sums", sums);
    console.log("prevSum", prevSum);
    if (!(currentSum in sums)) {
      sums[currentSum] = 1;
      prevSum = currentSum;
    } else if (currentSum !== prevSum) {
      sums[currentSum]++;
      prevSum = currentSum;
    } else {
      prevSum = -1;
    }
    count = Math.max(count, sums[currentSum]);
  }
  return count;
}

// Test cases
console.log(solution([10, 1, 3, 1, 2, 2, 1, 0, 4])); // Output: 3
// console.log(solution([5, 3, 1, 3, 2, 3])); // Output: 1
// console.log(solution([9, 9, 9, 9, 9])); // Output: 2
// console.log(solution([1, 5, 2, 4, 3, 3])); // Output: 3
