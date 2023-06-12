import { removeElement } from "../leetcode";

describe("removeElement", () => {
  it("should remove all instances of the given value from the array", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const expected = 2;
    const result = removeElement(nums, val);
    expect(result).toEqual(expected);
    expect(nums.slice(0, result)).toEqual([2, 2]);
  });

  it("should return the length of the resulting array", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const expected = 5;
    const result = removeElement(nums, val);
    expect(result).toEqual(expected);
  });

  it("should not modify the array if the value is not present", () => {
    const nums = [1, 2, 3];
    const val = 4;
    const expected = 3;
    const result = removeElement(nums, val);
    expect(result).toEqual(expected);
    expect(nums.slice(0, result)).toEqual([1, 2, 3]);
  });
});
