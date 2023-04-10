import { describe, expect, it } from 'vitest'
import { searchRange } from '../../../src/structures/array/034'

describe('searchRange', () => {
  it('exported', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4])
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1])
    expect(searchRange([], 0)).toStrictEqual([-1, -1])
    expect(searchRange([1], 1)).toStrictEqual([0, 0])
    expect(searchRange([2, 2], 2)).toStrictEqual([0, 1])
  })
})
