function solution(a) {
  let sum1 = 0
  let sum2 = 0

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sum1 += a[i]
    } else {
      sum2 += a[i]
    }
  }
  
  const result = []
  result.push(sum1, sum2)

  return result
}

const a = [50, 60, 60, 45, 70]
console.log("solution", solution(a))