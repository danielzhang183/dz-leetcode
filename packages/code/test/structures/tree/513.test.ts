import { describe, expect, it } from 'vitest'
import { findBottomLeftValue } from '../../../src/structures/tree/513'
import { createBinaryTree } from '../../../src/utils/tree'

describe('findBottomLeftValue', () => {
  it('exported', () => {
    expect(findBottomLeftValue(createBinaryTree([1]))).toBe(1)
    expect(findBottomLeftValue(createBinaryTree([0, null, -1]))).toBe(-1)
    expect(findBottomLeftValue(createBinaryTree([1, null, 2]))).toBe(2)
    expect(findBottomLeftValue(createBinaryTree([2, 1, 3]))).toBe(1)
    expect(findBottomLeftValue(createBinaryTree([1, 2, 3, 4, null, 5, 6, null, null, 7]))).toBe(7)
  })
})
