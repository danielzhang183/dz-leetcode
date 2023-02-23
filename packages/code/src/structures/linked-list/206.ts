import type { ListNode } from '../../utils/types'

// recursive
export function reverseList(head: ListNode | null): ListNode | null {
  // console.log({ head })
  if (head == null || head.next == null)
    return head

  const dumpHead = reverseList(head.next)
  // console.log({ before: dumpHead, next2: head.next.next, next1: head.next })
  head.next.next = head
  head.next = null
  // console.log({ after: toLinkedListString(dumpHead) })
  return dumpHead
}

// traverse
export function reverseList1(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head

  while (curr != null) {
    const tmp = curr.next
    curr.next = prev
    prev = curr
    curr = tmp
  }

  return prev
}
