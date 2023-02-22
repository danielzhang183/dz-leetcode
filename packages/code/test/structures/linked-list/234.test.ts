import { describe, expect, it } from 'vitest'
import { isPalindrome } from '../../../src/structures/linked-list/234'
import { createLinkedList } from '../../../src/utils'

describe('isPalindrome', () => {
  it('exported', () => {
    expect(isPalindrome(createLinkedList([1, 2, 2, 1]))).toBe(true)
    expect(isPalindrome(createLinkedList([1, 2]))).toBe(false)
  })
})
