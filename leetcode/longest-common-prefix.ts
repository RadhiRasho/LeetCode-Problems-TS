export function longestCommonPrefix(strs: string[]): string {
  let result = "";

  for (let i = 0; i < strs.length; ++i) {
    const values = strs.map((str) => str && str[i]);
    if (values && checkEquality(values)) result += values[0];
    else return result;
  }
  return result;
}

function checkEquality(values: string[]): boolean {
  for (let i = 0; i < values.length; ++i) {
    if (values[i] === values[0]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
