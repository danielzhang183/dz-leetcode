import { describe, expect, it } from 'vitest'
import { inorderTraversal } from '../../../src/structures/tree/094'

describe('inorderTraversal', () => {
  it('exported', () => {
    expect(inorderTraversal([1, null, 2, 3])).toBe([])
  })
})
