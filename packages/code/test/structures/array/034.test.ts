import { describe, expect, it } from 'vitest'
import { searchRange } from '../../../src/structures/array/034'

describe('searchRange', () => {
  it('exported', () => {
    expect(searchRange([5,7,7,8,8,10])).toBe(8)
    expect(searchRange([5,7,7,8,8,10])).toBe(6)
    expect(searchRange([])).toBe(0)
  })
})
