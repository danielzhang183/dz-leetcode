import { describe, expect, it } from 'vitest'
import { mergeTrees } from '../../../src/structures/tree/617'
import { createBinaryTree } from '../../../src/utils'

describe('mergeTrees', () => {
  it('exported', () => {
    expect(mergeTrees(
      createBinaryTree([1, 3, 2, 5]),
      createBinaryTree([2, 1, 3, null, 4, null, 7]),
    )).toStrictEqual(
      createBinaryTree([3, 4, 5, 5, 4, null, 7]),
    )
    expect(mergeTrees(
      createBinaryTree([1]),
      createBinaryTree([1, 2]),
    )).toStrictEqual(
      createBinaryTree([2, 2]),
    )
  })
})
