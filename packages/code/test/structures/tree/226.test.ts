import { describe, expect, it } from 'vitest'
import { invertTree } from '../../../src/structures/tree/226'
import { covertBinaryTreeToArray, createBinaryTree } from '../../../src/utils'

describe('invertTree', () => {
  it('exported', () => {
    const ll1 = createBinaryTree([4, 2, 7, 1, 3, 6, 9])
    expect(covertBinaryTreeToArray(invertTree(ll1))).toStrictEqual([4, 7, 2, 9, 6, 3, 1],
    )
    const ll2 = createBinaryTree([2, 1, 3])
    expect(covertBinaryTreeToArray(invertTree(ll2))).toStrictEqual([2, 3, 1])
    const ll3 = createBinaryTree([])
    expect(covertBinaryTreeToArray(invertTree(ll3))).toStrictEqual([])
  })
})
