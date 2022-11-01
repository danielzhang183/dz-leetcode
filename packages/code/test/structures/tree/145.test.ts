import { describe, expect, it } from 'vitest'
import { postorderTraversal } from '../../../src/structures/tree/145'

describe('postorderTraversal', () => {
  it('exported', () => {
    expect(postorderTraversal([1, null, 2, 3])).toBe([])
  })
})
