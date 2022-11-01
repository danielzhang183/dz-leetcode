import { describe, expect, it } from 'vitest'
import { getIntersectionNode } from '../../../src/structures/linked-list/160'

describe('getIntersectionNode', () => {
  it('exported', () => {
    expect(getIntersectionNode(8)).toBe([4, 1, 8, 4, 5])
    expect(getIntersectionNode([5, 6, 1, 8, 4, 5])).toBe(2)
    expect(getIntersectionNode(3)).toBe(2)
    expect(getIntersectionNode([1, 9, 1, 2, 4])).toBe([3, 2, 4])
    expect(getIntersectionNode(3)).toBe(1)
    expect(getIntersectionNode(0)).toBe([2, 6, 4])
    expect(getIntersectionNode([1, 5])).toBe(3)
  })
})
