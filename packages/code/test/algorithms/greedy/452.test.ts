import { describe, expect, it } from 'vitest'
import { findMinArrowShots } from '../../../src/algorithms/greedy/452'

describe('findMinArrowShots', () => {
  it('exported', () => {
    expect(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])).toBe(2)
    expect(findMinArrowShots([[1, 2], [3, 4], [5, 6], [7, 8]])).toBe(4)
    expect(findMinArrowShots([[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(2)
  })
})
