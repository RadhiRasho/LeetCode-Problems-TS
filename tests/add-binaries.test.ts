import { addBinary } from "../leetcode";

describe("addBinary", () => {
  it("should add 1 and 2", () => {
    expect(addBinary("1", "10")).toEqual("11");
  });

  it("should add 0 and 0", () => {
    expect(addBinary("0", "0")).toEqual("0");
  });

  it("should add 0 and 1", () => {
    expect(addBinary("0", "1")).toEqual("1");
  });

  it("should add 11 and 1", () => {
    expect(addBinary("11", "1")).toEqual("100");
  });

  it("should add 1010 and 1011", () => {
    expect(addBinary("1010", "1011")).toEqual("10101");
  });

  it("should add 1111 and 1111", () => {
    expect(addBinary("1111", "1111")).toEqual("11110");
  });
});
