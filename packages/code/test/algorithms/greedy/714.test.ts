import { describe, expect, it } from 'vitest'
import { maxProfit } from '../../../src/algorithms/greedy/714'

describe('maxProfit', () => {
  it('exported', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9])).toBe(2)
    expect(maxProfit([1, 3, 7, 5, 10, 3])).toBe(3)
  })
})
