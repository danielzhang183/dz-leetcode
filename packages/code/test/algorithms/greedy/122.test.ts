import { describe, expect, it } from 'vitest'
import { maxProfit } from '../../../src/algorithms/greedy/122'

describe('maxProfit', () => {
  it('exported', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})
