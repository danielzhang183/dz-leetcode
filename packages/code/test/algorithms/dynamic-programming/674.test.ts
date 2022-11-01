import { describe, expect, it } from 'vitest'
import { findLengthOfLCIS } from '../../../src/algorithms/dynamic-programming/674'

describe('findLengthOfLCIS', () => {
  it('exported', () => {
    expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe([2, 2, 2, 2, 2])
  })
})
