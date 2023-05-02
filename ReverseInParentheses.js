function solution(inputString) {
  const stack = [];
  let outputString = '';

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "(") {
      stack.push(outputString)
      outputString = ''
    } else if (inputString[i] === ")") {
      const previousString = stack.pop()
      outputString = previousString + outputString.split('').reverse().join('')
    } else {
      outputString += inputString[i]
    }
  }

  return outputString;
}

const input = "foo(bar(baz))blim"
console.log("solution input", solution(input))