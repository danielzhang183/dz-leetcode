import { describe, expect, it } from 'vitest'
import { getMinimumDifference } from '../../../src/structures/tree/530'
import { createBinaryTree } from '../../../src/utils'

describe('getMinimumDifference', () => {
  it('exported', () => {
    expect(getMinimumDifference(createBinaryTree([4, 2, 6, 1, 3]))).toBe(1)
    expect(getMinimumDifference(createBinaryTree([1, 0, 48, null, null, 12, 49]))).toBe(1)
  })
})
