import { describe, expect, it } from 'vitest'
import { hasPathSum } from '../../../src/structures/tree/112'

describe('hasPathSum', () => {
  it('exported', () => {
    expect(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])).toBe(22)
    expect(hasPathSum([1, 2, 3])).toBe(5)
    expect(hasPathSum([])).toBe(0)
  })
})
