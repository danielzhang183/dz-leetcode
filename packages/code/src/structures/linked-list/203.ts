import type { ListNode } from '../../utils/types'

// recursive
export function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head == null)
    return head
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}

// traverse
// export function removeElements(head: ListNode | null, val: number): ListNode | null {
//   const prehead = new ListNode(-1)
//   prehead.next = head

//   let curr = prehead
//   while (curr.next != null) {
//     if (curr.next.val === val)
//       curr.next = curr.next.next
//     else
//       curr = curr.next
//   }

//   return prehead.next
// }
