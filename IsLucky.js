// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

function solution(n) {
  const numArr = Array.from(n.toString()).map(Number)
  let firstHalf = 0
  let secondHalf = 0

  for (let i = 0; i < numArr.length / 2; i++) {
    firstHalf += numArr[i]
  }

  for (let i = numArr.length / 2; i < numArr.length; i++) {
    secondHalf += numArr[i]
  }

  return firstHalf === secondHalf
}


const n = 1230
console.log("Solution isLucky", solution(n))