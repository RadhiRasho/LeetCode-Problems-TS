import { longestCommonPrefix } from "../leetcode";

describe("longestCommonPrefix", () => {
  it("should return the longest common prefix of an array of strings", () => {
    const input = ["flower", "flow", "flight"];
    const expectedOutput = "fl";
    expect(longestCommonPrefix(input)).toEqual(expectedOutput);
  });

  it("should return the longest common prefix of an array of strings", () => {
    const input = ["flower", "flow", "flower"];
    const expectedOutput = "flow";
    expect(longestCommonPrefix(input)).toEqual(expectedOutput);
  });

  it("should return the longest common prefix of an array of strings", () => {
    const input = ["flower", "flower", "flower"];
    const expectedOutput = "flower";
    expect(longestCommonPrefix(input)).toEqual(expectedOutput);
  });

  it("should return an empty string if there is no common prefix", () => {
    const input = ["dog", "racecar", "car"];
    const expectedOutput = "";
    expect(longestCommonPrefix(input)).toEqual(expectedOutput);
  });

  it("should return an empty string if the input array is empty", () => {
    const input: string[] = [];
    const expectedOutput = "";
    expect(longestCommonPrefix(input)).toEqual(expectedOutput);
  });
});
