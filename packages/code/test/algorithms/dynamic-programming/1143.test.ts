import { describe, expect, it } from 'vitest'
import { longestCommonSubsequence } from '../../../src/algorithms/dynamic-programming/1143'

describe('longestCommonSubsequence', () => {
  it('exported', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3)
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3)
    expect(longestCommonSubsequence('abc', 'def')).toBe(0)
  })
})
