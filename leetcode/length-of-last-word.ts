export function lengthOfLastWord(s: string): number {
  const newS = s.trim().split(" ");
  return newS[newS.length - 1].length;
}
