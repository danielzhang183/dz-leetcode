import { describe, expect, it } from 'vitest'
import { flatten } from '../../../src/structures/tree/114'
import { createBinaryTree } from '../../../src/utils/tree'

describe('flatten', () => {
  it('exported', () => {
    expect(flatten(createBinaryTree([1, 2, 5, 3, 4, null, 6]))).toStrictEqual([1, null, 2, null, 3, null, 4, null, 5, null, 6])
    expect(flatten(createBinaryTree([]))).toStrictEqual([])
    expect(flatten(createBinaryTree([0]))).toStrictEqual([0])
  })
})
