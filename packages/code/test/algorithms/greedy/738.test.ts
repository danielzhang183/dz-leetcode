import { describe, expect, it } from 'vitest'
import { monotoneIncreasingDigits } from '../../../src/algorithms/greedy/738'

describe('monotoneIncreasingDigits', () => {
  it('exported', () => {
    expect(monotoneIncreasingDigits(10)).toBe(9)
    expect(monotoneIncreasingDigits(1234)).toBe(1234)
    expect(monotoneIncreasingDigits(332)).toBe(299)
  })
})
