import { describe, expect, it } from 'vitest'
import { isPalindrome } from '../../../src/structures/array/125'

describe('isPalindrome', () => {
  it('exported', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe('race a car')
  })
})
