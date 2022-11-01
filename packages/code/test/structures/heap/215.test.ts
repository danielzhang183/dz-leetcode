import { describe, expect, it } from 'vitest'
import { findKthLargest } from '../../../src/structures/heap/215'

describe('findKthLargest', () => {
  it('exported', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4])).toBe(2)
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6])).toBe(4)
  })
})
