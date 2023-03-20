import { ListNode } from '../../utils/types'

export function swapPairs(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null)
    return head

  const dump = new ListNode(-1, head)

  let cur: ListNode | null = dump
  while (cur?.next != null && cur.next.next != null) {
    const tmp = cur.next
    const tmp1 = cur.next.next.next
    cur.next = cur.next.next
    cur.next.next = tmp
    cur.next.next!.next = tmp1
    cur = cur.next.next
  }

  return dump.next
}
