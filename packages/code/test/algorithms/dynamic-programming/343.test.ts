import { describe, expect, it } from 'vitest'
import { integerBreak } from '../../../src/algorithms/dynamic-programming/343'

describe('integerBreak', () => {
  it('exported', () => {
    expect(integerBreak(2)).toBe(10)
  })
})
