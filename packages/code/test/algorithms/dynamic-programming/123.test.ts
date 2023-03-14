import { describe, expect, it } from 'vitest'
import { maxProfit } from '../../../src/algorithms/dynamic-programming/123'

describe('maxProfit', () => {
  it('exported', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(6)
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
    expect(maxProfit([1])).toBe(0)
  })
})
