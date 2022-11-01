import { describe, expect, it } from 'vitest'
import { kthSmallest } from '../../../src/structures/tree/230'

describe('kthSmallest', () => {
  it('exported', () => {
    expect(kthSmallest([3, 1, 4, null, 2])).toBe(1)
    expect(kthSmallest([5, 3, 6, 2, 4, null, null, 1])).toBe(3)
  })
})
