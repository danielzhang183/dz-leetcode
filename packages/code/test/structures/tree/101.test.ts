import { describe, expect, it } from 'vitest'
import { isSymmetric } from '../../../src/structures/tree/101'
import { createBinaryTree } from '../../../src/utils'

describe('isSymmetric', () => {
  it('exported', () => {
    expect(isSymmetric(createBinaryTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true)
    expect(isSymmetric(createBinaryTree([1, 2, 2, null, 3, null, 3]))).toBe(false)
  })
})
