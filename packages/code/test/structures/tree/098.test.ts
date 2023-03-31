import { describe, expect, it } from 'vitest'
import { isValidBST } from '../../../src/structures/tree/098'
import { createBinaryTree } from '../../../src/utils'

describe('isValidBST', () => {
  it('exported', () => {
    expect(isValidBST(createBinaryTree([2, 1, 3]))).toBeTruthy()
    expect(isValidBST(createBinaryTree([5, 1, 4, null, null, 3, 6]))).toBeFalsy()
    expect(isValidBST(createBinaryTree([5, 4, 6, null, null, 3, 7]))).toBeFalsy()
  })
})
