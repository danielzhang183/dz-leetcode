import { describe, expect, it } from 'vitest'
import { preorderTraversal } from '../../../src/structures/tree/144'
import { createBinaryTree } from '../../../src/utils'

describe('preorderTraversal', () => {
  it('exported', () => {
    expect(preorderTraversal(createBinaryTree([1, null, 2, 3]))).toStrictEqual([1, 2, 3])
    expect(preorderTraversal(createBinaryTree([]))).toStrictEqual([])
    expect(preorderTraversal(createBinaryTree([1]))).toStrictEqual([1])
  })
})
