import type { ListNode } from '../../utils/types'

export function hasCycle(head: ListNode | null): boolean {
  if (!head)
    return false

  let slow = head
  let fast = head.next

  while (fast !== slow) {
    if (!fast || !fast.next)
      return false

    fast = fast.next!.next
    slow = slow.next!
  }

  return true
}
