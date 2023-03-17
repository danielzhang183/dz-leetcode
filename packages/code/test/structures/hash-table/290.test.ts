import { describe, expect, it } from 'vitest'
import { wordPattern } from '../../../src/structures/hash-table/290'

describe('wordPattern', () => {
  it('exported', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBe(true)
    expect(wordPattern('abba', 'dog cat cat fish')).toBe(false)
    expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false)
  })
})
