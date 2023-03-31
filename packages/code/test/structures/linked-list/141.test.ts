import { describe, expect, it } from 'vitest'
import { hasCycle } from '../../../src/structures/linked-list/141'
import { createCycleLinkedList } from '../../../src/utils'

describe('hasCycle', () => {
  it('exported', () => {
    const c1 = createCycleLinkedList([3, 2, 0, -4], 1)
    expect(hasCycle(c1)).toBeTruthy()
    const c2 = createCycleLinkedList([1, 2], 0)
    expect(hasCycle(c2)).toBeTruthy()
    const c3 = createCycleLinkedList([1], -1)
    expect(hasCycle(c3)).toBeFalsy()
  })
})
