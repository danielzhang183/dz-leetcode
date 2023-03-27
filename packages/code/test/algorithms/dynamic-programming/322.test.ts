import { describe, expect, it } from 'vitest'
import { coinChange } from '../../../src/algorithms/dynamic-programming/322'

describe('coinChange', () => {
  it('exported', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3)
    expect(coinChange([2], 3)).toBe(-1)
    expect(coinChange([1], 0)).toBe(0)
  })
})
