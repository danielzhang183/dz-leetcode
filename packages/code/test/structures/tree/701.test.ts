import { describe, expect, it } from 'vitest'
import { insertIntoBST } from '../../../src/structures/tree/701'
import { covertBinaryTreeToArray, createBinaryTree } from '../../../src/utils'

describe('insertIntoBST', () => {
  it('exported', () => {
    expect(covertBinaryTreeToArray(
      insertIntoBST(createBinaryTree([4, 2, 7, 1, 3]), 5),
    )).toStrictEqual([4, 2, 7, 1, 3, 5])

    expect(covertBinaryTreeToArray(
      insertIntoBST(createBinaryTree([40, 20, 60, 10, 30, 50, 70]), 25),
    )).toStrictEqual([40, 20, 60, 10, 30, 50, 70, 25])
    // .toStrictEqual([40, 20, 60, 10, 30, 50, 70, null, null, 25])

    expect(covertBinaryTreeToArray(
      insertIntoBST(createBinaryTree([4, 2, 7, 1, 3, null, null, null, null, null, null]), 5),
    )).toStrictEqual([4, 2, 7, 1, 3, 5])

    expect(covertBinaryTreeToArray(
      insertIntoBST(createBinaryTree([]), 5),
    )).toStrictEqual([5])
  })
})
