function solution(str) {
  str = str.replace(/\s/g, '')

  if (str.length === 0) {
    return 0
  }

  let result = eval(str)

  // if (typeof result !== 'number' || isNaN(result)) {
  //   return -1
  // }

  return result
}

console.log("solution", solution("(2+(3-1)*3)**3"))