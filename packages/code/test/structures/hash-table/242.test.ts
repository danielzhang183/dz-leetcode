import { describe, expect, it } from 'vitest'
import { isAnagram } from '../../../src/structures/hash-table/242'

describe('isAnagram', () => {
  it('exported', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
    expect(isAnagram('rat', 'car')).toBe(false)
    expect(isAnagram('ab', 'a')).toBe(false)
  })
})
