import { ListNode } from '../../utils/types'

// fast & slow pointer
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dump = new ListNode(-1, head)
  let fast = head
  while (n-- > 0)
    fast = fast!.next

  let slow: ListNode | null = dump
  while (fast != null) {
    slow = slow!.next
    fast = fast.next
  }
  slow!.next = slow!.next!.next

  return dump.next
}

// stack
// export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   const stack: ListNode[] = []
//   const dump = new ListNode(-1, head)
//   let curr: ListNode | null = dump
//   while (curr != null) {
//     stack.push(curr)
//     curr = curr.next
//   }

//   while (n-- > 0)
//     stack.length--

//   const prev = stack[stack.length - 1]
//   prev.next = prev.next!.next
//   return dump.next
// }

// count
// function getLength(head: ListNode | null): number {
//   let curr = head
//   let count = 0
//   while (curr != null) {
//     curr = curr.next
//     count++
//   }

//   return count
// }
// export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   const dump = new ListNode(-1, head)
//   let len = getLength(head) - n
//   let curr: ListNode | null = dump
//   while (len-- > 0 && curr != null)
//     curr = curr?.next

//   curr!.next = curr!.next!.next
//   return dump.next
// }
