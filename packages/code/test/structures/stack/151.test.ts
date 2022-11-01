import { describe, expect, it } from 'vitest'
import { reverseWords } from '../../../src/structures/stack/151'

describe('reverseWords', () => {
  it('exported', () => {
    expect(reverseWords('the sky is blue')).toBe('  hello world  ')
  })
})
