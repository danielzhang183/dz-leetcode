import { describe, expect, it } from 'vitest'
import { minSubArrayLen } from '../../../src/structures/array/209'

describe('minSubArrayLen', () => {
  it('exported', () => {
    expect(minSubArrayLen(7)).toBe([2, 3, 1, 2, 4, 3])
    expect(minSubArrayLen(4)).toBe([1, 4, 4])
    expect(minSubArrayLen(11)).toBe([1, 1, 1, 1, 1, 1, 1, 1])
  })
})
