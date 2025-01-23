export const solutionSet = (s: string): number => {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    const charSet = new Set();
    for (let j = i; j < s.length; j++) {
      if (charSet.has(s[j])) {
        break;
      } else {
        charSet.add(s[j]);
      }
    }

    maxLength = Math.max(maxLength, charSet.size);
  }

  return maxLength;
};

const s = "abcabcbb";

console.log("SOLUTION SET", solutionSet(s));
