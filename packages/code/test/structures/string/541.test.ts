import { describe, expect, it } from 'vitest'
import { reverseStr } from '../../../src/structures/string/541'

describe('reverseStr', () => {
  it('exported', () => {
    expect(reverseStr('abcdefg')).toBe(2)
    expect(reverseStr('abcd')).toBe(2)
  })
})
