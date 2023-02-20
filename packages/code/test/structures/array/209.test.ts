import { describe, expect, it } from 'vitest'
import { minSubArrayLen } from '../../../src/structures/array/209'

describe('minSubArrayLen', () => {
  it('exported', () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1)
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0)
    expect(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12])).toBe(8)
  })
})
