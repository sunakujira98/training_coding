// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

function solution(n, firstNumber) {
  let positionFirstNumber = null
  let makeArray = []

  for (let i = 0; i < n; i++) {
    makeArray.push(i)
  }

  for (let i = 0; i < makeArray.length; i++) {
    if (makeArray[i] == firstNumber) {
      positionFirstNumber = i
    }
  }
  
  return makeArray[n - positionFirstNumber]
}

const n = 10
const firstNumber = 2

console.log("CHECK FOR SOLUTION", solution(n, firstNumber))