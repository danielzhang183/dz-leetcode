import { describe, expect, it } from 'vitest'
import { reverseStr } from '../../../src/structures/string/541'

describe('reverseStr', () => {
  it('exported', () => {
    expect(reverseStr('abcdefg', 2)).toBe('bacdfeg')
    expect(reverseStr('abcd', 2)).toBe('bacd')
    expect(reverseStr('abcdef', 3)).toBe('cbadef')
  })
})
