import { describe, expect, it } from 'vitest'
import { diameterOfBinaryTree } from '../../../src/structures/tree/543'

describe('diameterOfBinaryTree', () => {
  it('exported', () => {
    expect(diameterOfBinaryTree([1, 2, 3, 4, 5])).toBe([1, 2])
  })
})
