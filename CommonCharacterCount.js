function solution(s1, s2) {
  const freqS1 = {}
  const freqS2 = {}
  let count = 0

  for (let i = 0; i < s1.length; i++) {
    freqS1[s1[i]] = freqS1[s1[i]] + 1 || 1
  }

  console.log("FREQ S1", freqS1)

  for(let i = 0; i < s2.length; i++) {
    freqS2[s2[i]] = freqS2[s2[i]] + 1 || 1

    if (freqS1[s2[i]]) {
      count++;
      freqS1[s2[i]] --
    }
  }

  return count
}


const s1 = "aabcc"
const s2 = "adcaa"

console.log("solution for commonCharacterCount", solution(s1, s2))