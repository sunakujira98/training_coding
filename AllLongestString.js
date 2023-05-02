// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].


function solution(inputArray) {
  let max = -Infinity
  const longestArray = []

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > max) {
      max = inputArray[i].length
    }
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length == max) {
      longestArray.push(inputArray[i])
    }
  }
  
  return longestArray
}


const inputArray = ["aba", "aa", "ad", "vcd", "aba"]
console.log("solution inputArray", solution(inputArray))