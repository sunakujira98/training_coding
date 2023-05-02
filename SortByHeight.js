// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function solution(a) {
  const heights = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      heights.push(a[i])
    }
  }

  //sorting the heights using bubble sort
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length - 1 - i; j++) {
      if (heights[j] > heights[j+1]){
        const temp = heights[j]
        heights[j] = heights[j + 1]
        heights[j + 1] = temp
      }
    }
  }

  let j = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = heights[j]
      j++
    }
  }

  return a
}


const a = [-1, 150, 190, 170, -1, -1, 160, 180]

console.log("solution", solution(a))