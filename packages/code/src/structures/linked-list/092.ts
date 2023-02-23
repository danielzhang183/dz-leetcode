import { ListNode } from './../../utils/types'

// traverse
export function reverseBetween1(head: ListNode | null, left: number, right: number): ListNode | null {
  const dump = new ListNode(-1, head)

  let prev: ListNode | null = dump
  for (let i = 0; i < left - 1; i++)
    prev = prev!.next

  let rightNode: ListNode | null = prev
  for (let i = 0; i < right - left + 1; i++)
    rightNode = rightNode!.next

  const leftNode = prev!.next
  const curr = rightNode!.next

  prev!.next = null
  rightNode!.next = null

  reverseList(leftNode)

  prev!.next = rightNode
  leftNode!.next = curr

  return dump.next
}

function reverseList(head: ListNode | null): ListNode | null {
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

// one-time traverse (insert node from head)
export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dump = new ListNode(-1, head)

  let prev: ListNode | null = dump
  for (let i = 0; i < left - 1; i++)
    prev = prev!.next

  const curr: ListNode | null = prev!.next
  for (let i = 0; i < right - left; i++) {
    const next = curr!.next
    curr!.next = next!.next
    next!.next = prev!.next
    prev!.next = next
  }

  return dump.next
}
