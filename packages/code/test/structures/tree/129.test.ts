import { describe, expect, it } from 'vitest'
import { sumNumbers } from '../../../src/structures/tree/129'
import { createBinaryTree } from '../../../src/utils/tree'

describe('sumNumbers', () => {
  it('exported', () => {
    expect(sumNumbers(createBinaryTree([1, 2, 3]))).toBe(25)
    expect(sumNumbers(createBinaryTree([4, 9, 0, 5, 1]))).toBe(1026)
  })
})
