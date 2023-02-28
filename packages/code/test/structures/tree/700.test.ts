import { describe, expect, it } from 'vitest'
import { searchBST } from '../../../src/structures/tree/700'
import { covertBinaryTreeToArray, createBinaryTree } from '../../../src/utils'

describe('searchBST', () => {
  it('exported', () => {
    const ll = createBinaryTree([4, 2, 7, 1, 3])
    expect(covertBinaryTreeToArray(searchBST(ll, 2))).toStrictEqual([2, 1, 3])
    expect(covertBinaryTreeToArray(searchBST(ll, 5))).toStrictEqual([])
  })
})
