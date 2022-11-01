import { describe, expect, it } from 'vitest'
import { lowestCommonAncestor } from '../../../src/structures/tree/236'

describe('lowestCommonAncestor', () => {
  it('exported', () => {
    expect(lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])).toBe(5)
    expect(lowestCommonAncestor(1)).toBe([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
    expect(lowestCommonAncestor(5)).toBe(4)
    expect(lowestCommonAncestor([1, 2])).toBe(1)
  })
})
