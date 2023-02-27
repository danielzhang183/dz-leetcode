import { describe, expect, it } from 'vitest'
import { binaryTreePaths } from '../../../src/structures/tree/257'
import { createBinaryTree } from '../../../src/utils'

describe('binaryTreePaths', () => {
  it('exported', () => {
    expect(binaryTreePaths(createBinaryTree([1, 2, 3, null, 5]))).toStrictEqual(['1->2->5', '1->3'])
    expect(binaryTreePaths(createBinaryTree([1]))).toStrictEqual(['1'])
  })
})
