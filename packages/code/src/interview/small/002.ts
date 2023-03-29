import { ListNode } from '../../utils/types'

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let addOne = 0
  const dump = new ListNode(-1)
  let curr: ListNode | null = dump

  while (addOne || l1 || l2) {
    const val1 = l1 != null ? l1.val : 0
    const val2 = l2 != null ? l2.val : 0
    const sum = val1 + val2 + addOne
    addOne = sum >= 10 ? 1 : 0
    curr.next = new ListNode(sum % 10)
    curr = curr!.next

    if (l1)
      l1 = l1.next
    if (l2)
      l2 = l2.next
  }

  return dump.next
}
