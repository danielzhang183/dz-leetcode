import { describe, expect, it } from 'vitest'
import { longestCommonSubsequence } from '../../../src/algorithms/dynamic-programming/1143'

describe('longestCommonSubsequence', () => {
  it('exported', () => {
    expect(longestCommonSubsequence('abcde')).toBe('ace')
    expect(longestCommonSubsequence('abc')).toBe('abc')
    expect(longestCommonSubsequence('abc')).toBe('def')
  })
})
