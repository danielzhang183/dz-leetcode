import type { ListNode } from '../../utils/types'

// fast & slow pointer
export function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head
  while (true) {
    if (fast == null || fast.next == null)
      return null
    fast = fast.next.next
    slow = slow!.next
    if (fast === slow)
      break
  }

  fast = head
  while (fast !== slow) {
    fast = fast!.next
    slow = slow!.next
  }
  return fast
}

// hasSet
export function detectCycle1(head: ListNode | null): ListNode | null {
  const set = new Set()

  let curr: ListNode | null = head
  while (curr != null) {
    if (set.has(curr))
      return curr

    set.add(curr)
    curr = curr.next
  }

  return null
}
