import { describe, expect, it } from 'vitest'
import { findMin } from '../../../src/algorithms/binary-search/153'

describe('findMin', () => {
  it('exported', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1)
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0)
    expect(findMin([11, 13, 15, 17])).toBe(11)
  })
})
