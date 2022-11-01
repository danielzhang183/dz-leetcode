import { describe, expect, it } from 'vitest'
import { levelOrder } from '../../../src/structures/tree/429'

describe('levelOrder', () => {
  it('exported', () => {
    expect(levelOrder([1, null, 3, 2, 4, null, 5, 6])).toBe([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14])
  })
})
