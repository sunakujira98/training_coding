function encode(strs) {
  let res = "";
  for (let s of strs) {
      res += s.length + "#" + s;
  }

  console.log("res", res)
  return res;
}

/**
* @param {string} s - A string
* @return {string[]} - decodes a single string to a list of strings
*/
function decode(s) {
  let res = [];
  let i = 0;

  while (i < s.length) {
      let j = i;
      while (s[j] !== "#") {
        j++;
      }
      let length = parseInt(s.substring(i, j));
      res.push(s.substring(j + 1, j + 1 + length));
      i = j + 1 + length;
  }

  return res;
}

function solution(s) {
  const stringArr = encode(s)
  const result = decode(stringArr)

  return result
}

console.log("solution", solution(["lint","code","love","you"]))
