import { describe, expect, it } from 'vitest'
import { reverseString } from '../../../src/structures/string/344'

describe('reverseString', () => {
  it('exported', () => {
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toBe(['H', 'a', 'n', 'n', 'a', 'h'])
  })
})
