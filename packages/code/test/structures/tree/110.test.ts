import { describe, expect, it } from 'vitest'
import { isBalanced } from '../../../src/structures/tree/110'
import { createBinaryTree } from '../../../src/utils'

describe('isBalanced', () => {
  it('exported', () => {
    expect(isBalanced(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(true)
    expect(isBalanced(createBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]))).toBe(false)
    expect(isBalanced(createBinaryTree([]))).toBe(true)
  })
})
