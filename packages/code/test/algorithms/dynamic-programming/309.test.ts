import { describe, expect, it } from 'vitest'
import { maxProfit } from '../../../src/algorithms/dynamic-programming/309'

describe('maxProfit', () => {
  it('exported', () => {
    expect(maxProfit([1, 2, 3, 0, 2])).toBe(3)
    expect(maxProfit([1])).toBe([0])
  })
})
