import { firstOccuranceIndex } from "../leetcode";

describe("firstOccuranceIndex", () => {
  it("should return 0 for 'hello' and 'hello'", () => {
    expect(firstOccuranceIndex("hello", "hello")).toEqual(0);
  });

  it("should return 2 for 'hello' and 'll'", () => {
    expect(firstOccuranceIndex("hello", "ll")).toEqual(2);
  });

  it("should return -1 for 'aaaaa' and 'bba'", () => {
    expect(firstOccuranceIndex("aaaaa", "bba")).toEqual(-1);
  });

  it("should return 0 for 'a' and 'a'", () => {
    expect(firstOccuranceIndex("a", "a")).toEqual(0);
  });

  it("should return -1 for 'a' and 'b'", () => {
    expect(firstOccuranceIndex("a", "b")).toEqual(-1);
  });

  it("should return 0 for 'a' and ''", () => {
    expect(firstOccuranceIndex("a", "")).toEqual(0);
  });

  it("should return 0 for '' and ''", () => {
    expect(firstOccuranceIndex("", "")).toEqual(0);
  });

  it("should return 0 for 'aaa' and 'aaa'", () => {
    expect(firstOccuranceIndex("aaa", "aaa")).toEqual(0);
  });
});
