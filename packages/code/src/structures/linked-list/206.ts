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
// export function reverseList(head: ListNode | null): ListNode | null {
//   if (head == null || head.next == null)
//     return head

//   let prev = null
//   let temp: ListNode | null = null
//   let curr = head
//   while (curr) {
//     temp = curr.next
//     curr.next = prev
//     prev = curr
//     curr = temp
//   }

//   return prev
// }
