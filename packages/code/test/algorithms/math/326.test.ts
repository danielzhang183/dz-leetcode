import { describe, expect, it } from 'vitest'
import { isPowerOfThree } from '../../../src/algorithms/math/326'

describe('isPowerOfThree', () => {
  it('exported', () => {
    expect(isPowerOfThree(27)).toBe(0)
  })
})
