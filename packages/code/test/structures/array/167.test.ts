import { describe, expect, it } from 'vitest'
import { twoSum } from '../../../src/structures/array/167'

describe('twoSum', () => {
  it('exported', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
    expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3])
    expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2])
  })
})
