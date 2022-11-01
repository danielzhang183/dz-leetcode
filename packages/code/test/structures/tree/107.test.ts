import { describe, expect, it } from 'vitest'
import { levelOrderBottom } from '../../../src/structures/tree/107'

describe('levelOrderBottom', () => {
  it('exported', () => {
    expect(levelOrderBottom([3, 9, 20, null, null, 15, 7])).toBe([1])
  })
})
