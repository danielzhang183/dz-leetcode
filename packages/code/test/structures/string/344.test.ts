import { describe, expect, it } from 'vitest'
import { reverseString } from '../../../src/structures/string/344'

describe('reverseString', () => {
  it('exported', () => {
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual(['o', 'l', 'l', 'e', 'h'])
    expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H'])
  })
})
