import { climbStairs } from "../leetcode";

describe("climbStairs", () => {
  it("should return 1 for 1", () => {
    expect(climbStairs(1)).toEqual(1);
  });

  it("should return 2 for 2", () => {
    expect(climbStairs(2)).toEqual(2);
  });

  it("should return 3 for 3", () => {
    expect(climbStairs(3)).toEqual(3);
  });

  it("should return 5 for 4", () => {
    expect(climbStairs(4)).toEqual(5);
  });
});
