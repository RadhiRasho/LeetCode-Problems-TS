import { ListNode } from "../types";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) {
    return list1;
  }
  if (!list1 && !!list2) {
    return list2;
  }
  if (!list2 && !!list1) {
    return list1;
  }

  // @ts-ignore
  if (list1.val < list2.val) {
    // @ts-ignore
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    // @ts-ignore
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}
