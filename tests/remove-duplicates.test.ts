import { removeDuplicates } from "../leetcode";

describe("removeDuplicates", () => {
  it("should return 0 when the input array is empty", () => {
    expect(removeDuplicates([])).toBe(0);
  });

  it("should return 1 when the input array has only one element", () => {
    expect(removeDuplicates([1])).toBe(1);
  });

  it("should remove duplicates from the input array", () => {
    const input = [1, 1, 2, 2, 3];
    const expected = [1, 2, 3];
    expect(removeDuplicates(input)).toBe(expected.length);
    expect(input).toEqual(expected);
  });
});
