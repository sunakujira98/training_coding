// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

// Example

// For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be
// solution(min1, min2_10, min11, s) = 14.

function solution(min1, min2_10, min11, s) {
  let time = 0

  if (s < min1) {
    return time
  }

  let i = 0
  while (s > 0) {
    if (i === 0) {
      s = s - min1
    } else if (i > 0 && i < 10) {
      if (s - min2_10 < 0) {
        return time
      }
      s = s - min2_10
    } else {
      if (s - min11 < 0) {
        return time
      }
      s = s - min11
    }
    time ++
    i++
  }

  return time
}

const min1 = 1
const min2_10 = 2
const min11 = 1
const s = 6

console.log("Solution phone call", solution(min1, min2_10, min11, s))