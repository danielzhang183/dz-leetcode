import { describe, expect, it } from 'vitest'
import { sumOfLeftLeaves } from '../../../src/structures/tree/404'
import { createBinaryTree } from '../../../src/utils'

describe('sumOfLeftLeaves', () => {
  it('exported', () => {
    expect(sumOfLeftLeaves(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(24)
    expect(sumOfLeftLeaves(createBinaryTree([1]))).toBe(0)
  })
})
