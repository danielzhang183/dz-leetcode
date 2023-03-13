import { describe, expect, it } from 'vitest'
import { integerBreak } from '../../../src/algorithms/dynamic-programming/343'

describe('integerBreak', () => {
  it('exported', () => {
    expect(integerBreak(2)).toBe(1 * 1)
    expect(integerBreak(8)).toBe(2 * 9)
    expect(integerBreak(10)).toBe(3 * 3 * 4)
  })
})
