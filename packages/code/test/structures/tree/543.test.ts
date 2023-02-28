import { describe, expect, it } from 'vitest'
import { diameterOfBinaryTree } from '../../../src/structures/tree/543'
import { createBinaryTree } from '../../../src/utils'

describe('diameterOfBinaryTree', () => {
  it('exported', () => {
    expect(diameterOfBinaryTree(createBinaryTree([1, 2, 3, 4, 5]))).toBe(3)
    expect(diameterOfBinaryTree(createBinaryTree([1, 2]))).toBe(1)
  })
})
