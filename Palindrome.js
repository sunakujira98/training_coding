function solution(inputString) {
  const length = inputString.length

  for (let i = 0; i < length/2; i++) {
    if (inputString[i] !== inputString[length - 1 -i]) {
      return false
    }
  }

  return true
}

console.log(solution("madam"))