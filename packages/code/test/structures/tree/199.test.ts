import { describe, expect, it } from 'vitest'
import { rightSideView } from '../../../src/structures/tree/199'
import { createBinaryTree } from '../../../src/utils'

describe('rightSideView', () => {
  it('exported', () => {
    expect(rightSideView(createBinaryTree([1, 2, 3, null, 5, null, 4]))).toStrictEqual([1, 3, 4])
    expect(rightSideView(createBinaryTree([1, null, 3]))).toStrictEqual([1, 3])
    expect(rightSideView(createBinaryTree([1, 2, 3, 4]))).toStrictEqual([1, 3, 4])
    expect(rightSideView(createBinaryTree([]))).toStrictEqual([])
  })
})
