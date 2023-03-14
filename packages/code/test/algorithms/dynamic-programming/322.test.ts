import { describe, expect, it } from 'vitest'
import { coinChange } from '../../../src/algorithms/dynamic-programming/322'

describe('coinChange', () => {
  it('exported', () => {
    expect(coinChange([1, 2, 5])).toBe(11)
    expect(coinChange([2])).toBe(3)
    expect(coinChange([1])).toBe(0)
  })
})
