function solution(picture) {
  const width = picture[0].length + 2;
  const border = '*'.repeat(width);
  const result = [border];

  for (let i = 0; i < picture.length; i++) {
    result.push(`*${picture[i]}*`);
  }

  result.push(border);
  return result;
}


const picture = ["abc", "ded"]
console.log("checking for solution", solution(picture))