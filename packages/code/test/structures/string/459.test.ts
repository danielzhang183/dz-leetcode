import { describe, expect, it } from 'vitest'
import { repeatedSubstringPattern } from '../../../src/structures/string/459'

describe('repeatedSubstringPattern', () => {
  it('exported', () => {
    expect(repeatedSubstringPattern('abab')).toBe(true)
    expect(repeatedSubstringPattern('aba')).toBe(false)
    expect(repeatedSubstringPattern('abcabcabcabc')).toBe(true)
  })
})
