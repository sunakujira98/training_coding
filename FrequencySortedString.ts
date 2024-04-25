function frequencySort(s: string): string {
  const frequency: Record<string, number> = {};

  for (let char of s) {
    if (frequency[char]) {
      frequency[char] = frequency[char] + 1;
    } else {
      frequency[char] = 1;
    }
  }

  const freqArr: [string, number][] = Object.entries(frequency);

  freqArr.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }

    return b[1] - a[1];
  });

  let output = "";
  for (const [char, count] of freqArr) {
    output += char.repeat(count);
  }

  return output;
}
