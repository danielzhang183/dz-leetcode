import { describe, expect, it } from 'vitest'
import { repeatedSubstringPattern } from '../../../src/structures/string/459'

describe('repeatedSubstringPattern', () => {
  it('exported', () => {
    expect(repeatedSubstringPattern('abab')).toBe('aba')
  })
})
