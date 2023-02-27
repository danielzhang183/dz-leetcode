import { describe, expect, it } from 'vitest'
import { minDepth } from '../../../src/structures/tree/111'
import { createBinaryTree } from '../../../src/utils'

describe('minDepth', () => {
  it('exported', () => {
    expect(minDepth(createBinaryTree([3]))).toBe(1)
    expect(minDepth(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(2)
    expect(minDepth(createBinaryTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(5)
  })
})
