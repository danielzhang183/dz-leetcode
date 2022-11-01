import { describe, expect, it } from 'vitest'
import { eraseOverlapIntervals } from '../../../src/algorithms/greedy/435'

describe('eraseOverlapIntervals', () => {
  it('exported', () => {
    expect(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])).toBe([[1, 2], [1, 2], [1, 2]])
  })
})
