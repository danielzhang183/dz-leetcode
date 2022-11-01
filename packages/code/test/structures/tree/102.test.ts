import { describe, expect, it } from 'vitest'
import { levelOrder } from '../../../src/structures/tree/102'

describe('levelOrder', () => {
  it('exported', () => {
    expect(levelOrder([3, 9, 20, null, null, 15, 7])).toBe([1])
  })
})
