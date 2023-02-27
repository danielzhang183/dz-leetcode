import { describe, expect, it } from 'vitest'
import { inorderTraversal } from '../../../src/structures/tree/094'
import { createBinaryTree } from '../../../src/utils'

describe('inorderTraversal', () => {
  it('exported', () => {
    expect(inorderTraversal(createBinaryTree([1, null, 2, 3]))).toStrictEqual([1, 3, 2])
    expect(inorderTraversal(createBinaryTree([]))).toStrictEqual([])
    expect(inorderTraversal(createBinaryTree([1]))).toStrictEqual([1])
  })
})
