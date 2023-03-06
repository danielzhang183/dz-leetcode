import { describe, expect, it } from 'vitest'
import { findSubsequences } from '../../../src/algorithms/back-tracking/491'

describe('findSubsequences', () => {
  it('exported', () => {
    expect(findSubsequences([4,6,7,7])).toBe([4,4,3,2,1])
  })
})
