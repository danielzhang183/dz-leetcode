import { describe, expect, it } from 'vitest'
import { isBalanced } from '../../../src/structures/tree/110'

describe('isBalanced', () => {
  it('exported', () => {
    expect(isBalanced([3, 9, 20, null, null, 15, 7])).toBe([1, 2, 2, 3, 3, null, null, 4, 4])
  })
})
