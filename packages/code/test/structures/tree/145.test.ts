import { describe, expect, it } from 'vitest'
import { postorderTraversal } from '../../../src/structures/tree/145'
import { createBinaryTree } from '../../../src/utils'

describe('postorderTraversal', () => {
  it('exported', () => {
    expect(postorderTraversal(createBinaryTree([1, null, 2, 3]))).toStrictEqual([3, 2, 1])
    expect(postorderTraversal(createBinaryTree([1]))).toStrictEqual([1])
    expect(postorderTraversal(createBinaryTree([]))).toStrictEqual([])
  })
})
