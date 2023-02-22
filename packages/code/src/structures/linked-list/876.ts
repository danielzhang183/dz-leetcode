import type { ListNode } from '../../utils/types'

// fast & slow pointer
// export function middleNode(head: ListNode | null): ListNode | null {
//   let slow: ListNode | null = head
//   let fast: ListNode | null = head

//   while (fast && fast.next) {
//     slow = slow!.next
//     fast = fast.next.next
//   }

//   return slow
// }

// count
export function middleNode(head: ListNode | null): ListNode | null {
  let count = 0
  let curr = head
  while (curr) {
    curr = curr.next
    count++
  }

  count = count >> 1
  curr = head
  while (count-- > 0)
    curr = curr!.next

  return curr
}
