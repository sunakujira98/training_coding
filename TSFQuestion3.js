function AlphabetRunEncryption(str) {
  let output = '';
  let i = 0;

  while (i < str.length) {
    const currChar = str[i];
    const nextChar = str[i + 1];
    const nextNextChar = str[i + 2];

    if (!nextChar) {
      output += currChar;
      i++;
    } else if (!nextNextChar) {
      if (nextChar === 'S') {
        output += currChar + nextChar;
        i += 2;
      } else {
        const direction = currChar < nextChar ? 1 : -1;
        let temp = '';
        for (let j = currChar.charCodeAt(0) + direction; j !== nextChar.charCodeAt(0); j += direction) {
          temp += String.fromCharCode(j);
        }
        output += temp + nextChar;
        i += 2;
      }
    } else if (nextChar === 'S') {
      output += currChar + nextChar;
      i += 2;
    } else if (currChar === nextChar) {
      output += nextChar.toUpperCase() + 'N';
      i += 2;
    } else {
      const direction = currChar < nextChar ? 1 : -1;
      let temp = '';
      for (let j = currChar.charCodeAt(0) + direction; j !== nextChar.charCodeAt(0); j += direction) {
        temp += String.fromCharCode(j);
      }
      output += temp + nextChar;
      i++;
    }
  }

  return output;
}




console.log("solution", AlphabetRunEncryption("abSbaSaNbR"))