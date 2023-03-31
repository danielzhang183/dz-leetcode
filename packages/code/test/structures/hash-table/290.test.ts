import { describe, expect, it } from 'vitest'
import { wordPattern } from '../../../src/structures/hash-table/290'

describe('wordPattern', () => {
  it('exported', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBeTruthy()
    expect(wordPattern('abba', 'dog cat cat fish')).toBeFalsy()
    expect(wordPattern('aaaa', 'dog cat cat dog')).toBeFalsy()
  })
})
