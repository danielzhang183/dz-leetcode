import { describe, expect, it } from 'vitest'
import { twoSum } from '../../../src/structures/array/167'

describe('twoSum', () => {
  it('exported', () => {
    expect(twoSum([2, 7, 11, 15])).toBe(9)
    expect(twoSum([2, 3, 4])).toBe(6)
    expect(twoSum([-1, 0])).toBe(-1)
  })
})
