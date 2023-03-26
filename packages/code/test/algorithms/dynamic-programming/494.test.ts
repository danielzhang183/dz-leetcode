import { describe, expect, it } from 'vitest'
import { findTargetSumWays } from '../../../src/algorithms/dynamic-programming/494'

describe('findTargetSumWays', () => {
  it('exported', () => {
    expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5)
    expect(findTargetSumWays([1], 1)).toBe(1)
  })
})
