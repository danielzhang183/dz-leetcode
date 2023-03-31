import { describe, expect, it } from 'vitest'
import { isSubtree } from '../../../src/structures/tree/572'
import { createBinaryTree } from '../../../src/utils'

describe('isSubtree', () => {
  it('exported', () => {
    expect(isSubtree(
      createBinaryTree([3, 4, 5, 1, 2]),
      createBinaryTree([4, 1, 2]),
    )).toBeTruthy()
    expect(isSubtree(
      createBinaryTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
      createBinaryTree([4, 1, 2]),
    )).toBeFalsy()
    expect(isSubtree(
      createBinaryTree([1, 1]),
      createBinaryTree([1]),
    )).toBeTruthy()
  })
})
