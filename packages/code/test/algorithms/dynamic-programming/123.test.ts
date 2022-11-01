import { describe, expect, it } from 'vitest'
import { maxProfit } from '../../../src/algorithms/dynamic-programming/123'

describe('maxProfit', () => {
  it('exported', () => {
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe([1, 2, 3, 4, 5])
  })
})
