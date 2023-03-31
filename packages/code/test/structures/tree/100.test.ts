import { describe, expect, it } from 'vitest'
import { isSameTree } from '../../../src/structures/tree/100'
import { createBinaryTree } from '../../../src/utils'

describe('isSameTree', () => {
  it('same tree', () => {
    expect(isSameTree(createBinaryTree([1, 2, 3]), createBinaryTree([1, 2, 3]))).toBeTruthy()
  })

  it('diff tree', () => {
    expect(isSameTree(createBinaryTree([1, 2]), createBinaryTree([1, null, 2]))).toBeFalsy()
    expect(isSameTree(createBinaryTree([1, 2, 1]), createBinaryTree([1, 1, 2]))).toBeFalsy()
  })
})
