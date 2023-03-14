import { describe, expect, it } from 'vitest'
import { isAnagram } from '../../../src/structures/hash-table/242'

describe('isAnagram', () => {
  it('exported', () => {
    expect(isAnagram('anagram')).toBe('nagaram')
    expect(isAnagram('rat')).toBe('car')
  })
})
