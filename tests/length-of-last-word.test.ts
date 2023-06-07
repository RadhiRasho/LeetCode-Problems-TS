import { lengthOfLastWord } from "../leetcode";

describe("lengthOfLastWord()", () => {
  test("lengthOfLastWord('Hello World') should be 5", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  test("lengthOfLastWord('   fly me   to   the moon  ') should be 4", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });

  test("lengthOfLastWord('luffy is still joyboy') should be 6", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });

  test("lengthOfLastWord('Hello World') should be 5", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });
});
