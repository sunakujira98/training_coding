//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

function solution(inputArray) {
  let max = -Infinity
  
  
  for (let i = 0; i < inputArray.length - 1; i++) {
    let prevElement = inputArray[i]
    let nextElement = inputArray[i+1]
    
    const sum = prevElement * nextElement;
    max = Math.max(sum, max)
  }
  return max
}


console.log(solution([3, 6, -2, -5, 7, 3]))