import { describe, expect, it } from 'vitest'
import { eraseOverlapIntervals } from '../../../src/algorithms/greedy/435'

describe('eraseOverlapIntervals', () => {
  it('exported', () => {
    expect(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])).toBe(1)
    expect(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])).toBe(2)
    expect(eraseOverlapIntervals([[1, 2], [2, 3]])).toBe(0)
    expect(eraseOverlapIntervals([[1, 100], [11, 22], [1, 11], [2, 12]])).toBe(2)
  })
})
