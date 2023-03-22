import { describe, expect, it } from 'vitest'
import { minDistance } from '../../../src/algorithms/dynamic-programming/583'

describe('minDistance', () => {
  it('exported', () => {
    expect(minDistance('sea', 'eat')).toBe(2)
    expect(minDistance('leetcode', 'etco')).toBe(4)
  })
})
