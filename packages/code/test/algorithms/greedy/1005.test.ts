import { describe, expect, it } from 'vitest'
import { largestSumAfterKNegations } from '../../../src/algorithms/greedy/1005'

describe('largestSumAfterKNegations', () => {
  it('exported', () => {
    expect(largestSumAfterKNegations([4, 2, 3], 1)).toBe(5)
    expect(largestSumAfterKNegations([3, -1, 0, 2], 3)).toBe(6)
    expect(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)).toBe(13)
  })
})
