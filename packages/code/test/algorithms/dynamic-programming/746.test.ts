import { describe, expect, it } from 'vitest'
import { minCostClimbingStairs } from '../../../src/algorithms/dynamic-programming/746'

describe('minCostClimbingStairs', () => {
  it('exported', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])
  })
})
