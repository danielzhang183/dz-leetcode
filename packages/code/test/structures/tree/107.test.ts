import { describe, expect, it } from 'vitest'
import { levelOrderBottom } from '../../../src/structures/tree/107'
import { createBinaryTree } from '../../../src/utils'

describe('levelOrderBottom', () => {
  it('exported', () => {
    expect(levelOrderBottom(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toStrictEqual([[15, 7], [9, 20], [3]])
    expect(levelOrderBottom(createBinaryTree([1]))).toStrictEqual([[1]])
    expect(levelOrderBottom(createBinaryTree([]))).toStrictEqual([])
  })
})
