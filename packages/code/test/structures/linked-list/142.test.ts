import { describe, expect, it } from 'vitest'
import { detectCycle } from '../../../src/structures/linked-list/142'
import { createCycleLinkedList } from '../../../src/utils'

describe('detectCycle', () => {
  it('has cycle', () => {
    const ll1 = createCycleLinkedList([3, 2, 0, -4], 1)
    expect(detectCycle(ll1)!.val).toBe(2)
    const ll2 = createCycleLinkedList([1, 2], 0)
    expect(detectCycle(ll2)!.val).toStrictEqual(1)
  })

  it('non cycle', () => {
    const ll3 = createCycleLinkedList([1])
    expect(detectCycle(ll3)).toBe(null)
  })
})
