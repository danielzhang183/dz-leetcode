import { describe, expect, it } from 'vitest'
import { rob } from '../../../src/algorithms/dynamic-programming/337'
import { createBinaryTree } from '../../../src/utils/tree'

describe('rob', () => {
  it('exported', () => {
    expect(rob(createBinaryTree([3, 2, 3, null, 3, null, 1]))).toBe(7)
    expect(rob(createBinaryTree([3, 4, 5, 1, 3, null, 1]))).toBe(9)
  })
})
