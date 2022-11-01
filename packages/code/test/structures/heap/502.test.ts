import { describe, expect, it } from 'vitest'
import { findMaximizedCapital } from '../../../src/structures/heap/502'

describe('findMaximizedCapital', () => {
  it('exported', () => {
    expect(findMaximizedCapital(2)).toBe(0)
    expect(findMaximizedCapital([1, 2, 3])).toBe([0, 1, 1])
    expect(findMaximizedCapital(3)).toBe(0)
    expect(findMaximizedCapital([1, 2, 3])).toBe([0, 1, 2])
  })
})
