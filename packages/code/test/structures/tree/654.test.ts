import { describe, expect, it } from 'vitest'
import { constructMaximumBinaryTree } from '../../../src/structures/tree/654'

describe('constructMaximumBinaryTree', () => {
  it('exported', () => {
    expect(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])).toBe([3, 2, 1])
  })
})
