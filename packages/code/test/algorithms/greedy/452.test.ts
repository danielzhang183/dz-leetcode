import { describe, expect, it } from 'vitest'
import { findMinArrowShots } from '../../../src/algorithms/greedy/452'

describe('findMinArrowShots', () => {
  it('exported', () => {
    expect(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])).toBe([[1, 2], [3, 4], [5, 6], [7, 8]])
  })
})
