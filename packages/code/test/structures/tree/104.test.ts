import { describe, expect, it } from 'vitest'
import { maxDepth } from '../../../src/structures/tree/104'
import { createBinaryTree } from '../../../src/utils'

describe('maxDepth', () => {
  it('exported', () => {
    expect(maxDepth(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(3)
    expect(maxDepth(createBinaryTree([1, null, 2]))).toBe(2)
  })
})
