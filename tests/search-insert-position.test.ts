import { searchInsert } from "../leetcode";

describe("searchInsert", () => {
  it("should return the index of the target if it is present in the array", () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    const expected = 2;
    const result = searchInsert(nums, target);
    expect(result).toEqual(expected);
  });

  it("should return the index where the target should be inserted if it is not present in the array", () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    const expected = 1;
    const result = searchInsert(nums, target);
    expect(result).toEqual(expected);
  });

  it("should return 0 if the target is less than the first element of the array", () => {
    const nums = [1, 3, 5, 6];
    const target = 0;
    const expected = 0;
    const result = searchInsert(nums, target);
    expect(result).toEqual(expected);
  });

  it("should return the length of the array if the target is greater than the last element of the array", () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    const expected = 4;
    const result = searchInsert(nums, target);
    expect(result).toEqual(expected);
  });
});
