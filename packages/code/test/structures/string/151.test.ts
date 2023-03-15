import { describe, expect, it } from 'vitest'
import { reverseWords } from '../../../src/structures/string/151'

describe('reverseWords', () => {
  it('exported', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the')
    expect(reverseWords('  hello world  ')).toBe('world hello')
    expect(reverseWords('a good   example')).toBe('example good a')
  })
})
