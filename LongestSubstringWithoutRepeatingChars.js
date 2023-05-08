// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

function solutionSet(s) {
  let maxLength = 0

  for (let i = 0; i < s.length; i++) {
    let currentStringSet = new Set();

    for (let j = i; j < s.length; j++) {
      if (currentStringSet.has(s[j])) {
        break;
      } else {
        currentStringSet.add(s[j])
      }
    }

    maxLength = Math.max(maxLength, currentStringSet.size)
  }

  return maxLength
}

function solutionArray(s) {
  let maxLength = 0
  let currentString = []

  for (let i = 0; i < s.length; i++) {
    const currentCharacterPosition = currentString.indexOf(s[i])

    // console.log("currentC", currentCharacterPosition)

    if (currentCharacterPosition !== -1) {
      currentString.splice(0, currentCharacterPosition + 1)
    }

    // console.log("currentC before", currentString)
    currentString.push(s[i])
    // console.log("currentC after", currentString)

    maxLength = Math.max(maxLength, currentString.length)
  }

  return maxLength
}

console.log("check for solution", solutionArray("abcabcbb"))