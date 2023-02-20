import { describe, expect, it } from 'vitest'
import { isPalindrome } from '../../../src/structures/array/125'

describe('isPalindrome', () => {
  it('exported', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    expect(isPalindrome('race a car')).toBe(false)
    expect(isPalindrome('a')).toBe(true)
    expect(isPalindrome('aa')).toBe(true)
    expect(isPalindrome(' ')).toBe(true)
    expect(isPalindrome('ab_a')).toBe(true)
  })
})
