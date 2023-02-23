import type { ListNode } from '../../utils/types'

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB)
    return null

  let lA: ListNode | null = headA
  let lB: ListNode | null = headB
  while (lA !== lB) {
    lA = lA == null ? headB : lA.next
    lB = lB == null ? headA : lB.next
  }

  return lA
}
