import { describe, expect, it } from 'vitest'
import { levelOrder } from '../../../src/structures/tree/102'
import { createBinaryTree } from '../../../src/utils'

describe('levelOrder', () => {
  it('exported', () => {
    expect(levelOrder(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toStrictEqual([[3], [9, 20], [15, 7]])
    expect(levelOrder(createBinaryTree([1]))).toStrictEqual([[1]])
    expect(levelOrder(createBinaryTree([]))).toStrictEqual([])
  })
})
