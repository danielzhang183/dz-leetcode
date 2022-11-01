import { describe, expect, it } from 'vitest'
import { isPalindrome } from '../../../src/structures/linked-list/234'

describe('isPalindrome', () => {
  it('exported', () => {
    expect(isPalindrome([1, 2, 2, 1])).toBe([1, 2])
  })
})
