import { describe, expect, it } from 'vitest'
import { isPalindrome } from '../../../src/structures/array/125'

describe('isPalindrome', () => {
  it('exported', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy()
    expect(isPalindrome('race a car')).toBeFalsy()
    expect(isPalindrome('a')).toBeTruthy()
    expect(isPalindrome('aa')).toBeTruthy()
    expect(isPalindrome(' ')).toBeTruthy()
    expect(isPalindrome('ab_a')).toBeTruthy()
  })
})
