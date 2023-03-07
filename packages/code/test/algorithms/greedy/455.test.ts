import { describe, expect, it } from 'vitest'
import { findContentChildren } from '../../../src/algorithms/greedy/455'

describe('findContentChildren', () => {
  it('exported', () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
    expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2)
    expect(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])).toBe(2)
  })
})
