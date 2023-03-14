import { describe, expect, it } from 'vitest'
import { lowestCommonAncestor } from '../../../src/structures/tree/235'

describe('lowestCommonAncestor', () => {
  it('exported', () => {
    expect(lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])).toBe(2)
    expect(lowestCommonAncestor(8)).toBe([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    expect(lowestCommonAncestor(2)).toBe(4)
    expect(lowestCommonAncestor([2, 1])).toBe(2)
  })
})
