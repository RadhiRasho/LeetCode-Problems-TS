import { mySqrt } from "../leetcode";

describe("mySqrt", () => {
  it("should return the square root of a perfect square", () => {
    const x = 16;
    const expected = 4;
    const result = mySqrt(x);
    expect(result).toEqual(expected);
  });

  it("should return the floor of the square root of a non-perfect square", () => {
    const x = 10;
    const expected = 3;
    const result = mySqrt(x);
    expect(result).toEqual(expected);
  });

  it("should return 0 for input 0", () => {
    const x = 0;
    const expected = 0;
    const result = mySqrt(x);
    expect(result).toEqual(expected);
  });

  it("should return 1 for input 1", () => {
    const x = 1;
    const expected = 1;
    const result = mySqrt(x);
    expect(result).toEqual(expected);
  });
});
