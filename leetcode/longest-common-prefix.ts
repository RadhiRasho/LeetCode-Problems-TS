export function longestCommonPrefix(strs: string[]): string {
  let result = "";

  if (!strs.length) return result;

  for (let i = 0; i < strs[0].length; ++i) {
    const char = strs[0][i];
    if (strs.every((str) => str[i] === char)) result += char;
    else break;
  }
  return result;
}
