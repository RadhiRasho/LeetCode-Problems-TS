import { mergeTwoLists } from "../leetcode";
import { ListNode } from "../types";

describe("mergeTwoLists", () => {
  it("should return null when both lists are null", () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  it("should return the non-null list when one list is null", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
    expect(mergeTwoLists(list1, null)).toBe(list1);
    expect(mergeTwoLists(null, list1)).toBe(list1);
  });

  it("should merge two sorted lists", () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
    const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
    const expected = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    );
    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });
});
