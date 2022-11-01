import { describe, expect, it } from 'vitest'
import { preorderTraversal } from '../../../src/structures/tree/144'

describe('preorderTraversal', () => {
  it('exported', () => {
    expect(preorderTraversal([1, null, 2, 3])).toBe([])
  })
})
