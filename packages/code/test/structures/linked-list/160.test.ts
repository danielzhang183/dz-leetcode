import { describe, expect, it } from 'vitest'
import { getIntersectionNode } from '../../../src/structures/linked-list/160'
import { createIntersectionLinkedList } from '../../../src/utils'

describe('getIntersectionNode', () => {
  it('intersection', () => {
    const { headA, headB } = createIntersectionLinkedList(
      [4, 1, 8, 4, 5],
      [5, 6, 1, 8, 4, 5],
      8,
    )
    expect(getIntersectionNode(headA, headB)!.val).toBe(8)
    const { headA: head1, headB: head2 } = createIntersectionLinkedList(
      [1, 9, 1, 2, 4],
      [3, 2, 4],
      2,
    )
    expect(getIntersectionNode(head1, head2)!.val).toBe(2)
  })

  it('not intersection', () => {
    const { headA, headB } = createIntersectionLinkedList(
      [2, 6, 4],
      [1, 5],
      0,
    )
    expect(getIntersectionNode(headA, headB)).toBe(null)
  })
})
