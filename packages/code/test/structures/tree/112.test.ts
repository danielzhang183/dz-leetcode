import { describe, expect, it } from 'vitest'
import { hasPathSum } from '../../../src/structures/tree/112'
import { createBinaryTree } from '../../../src/utils'

describe('hasPathSum', () => {
  it('exported', () => {
    expect(hasPathSum(createBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)).toBeTruthy()
    expect(hasPathSum(createBinaryTree([1, 2, 3]), 5)).toBeFalsy()
    expect(hasPathSum(createBinaryTree([]), 0)).toBeFalsy()
    expect(hasPathSum(createBinaryTree([1, -2, -3, 1, 3, -2, null, -1]), -1)).toBeTruthy()
  })
})
