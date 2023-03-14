import { describe, expect, it } from 'vitest'
import { sortByBits } from '../../../src/algorithms/bitwise/1356'

describe('sortByBits', () => {
  it('exported', () => {
    expect(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])).toBe([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])
  })
})
