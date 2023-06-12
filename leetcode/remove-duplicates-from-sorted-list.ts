import { ListNode } from "../types";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      let temp = p.next;
      p.next = temp.next;
    } else {
      p = p.next;
    }
  }

  return head;
}

export function deleteDuplicatesRecursive(
  head: ListNode | null
): ListNode | null {
  doStuff(head);
  return head;
}

function doStuff(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  if (head.val === head.next?.val) {
    head.next = head.next?.next;

    return doStuff(head);
  }

  return doStuff(head.next);
}
