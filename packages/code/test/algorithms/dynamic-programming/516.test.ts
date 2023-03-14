import { describe, expect, it } from 'vitest'
import { longestPalindromeSubseq } from '../../../src/algorithms/dynamic-programming/516'

describe('longestPalindromeSubseq', () => {
  it('exported', () => {
    expect(longestPalindromeSubseq('bbbab')).toBe('cbbd')
  })
})
