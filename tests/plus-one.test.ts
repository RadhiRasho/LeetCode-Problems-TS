import { plusOne } from "../leetcode";

describe("plusOne", () => {
  it("should return 0 when the input array is empty", () => {
    expect(plusOne([])).toBe(0);
  });

  it("should return the sum of the digits in the input array", () => {
    expect(plusOne([1, 2, 3])).toBe(6);
    expect(plusOne([4, 5, 6])).toBe(15);
    expect(plusOne([0, 0, 1])).toBe(1);
  });
});
