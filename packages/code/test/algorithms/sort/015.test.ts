import { describe, expect, it } from 'vitest'
import { threeSum } from '../../../src/algorithms/sort/015'

describe('threeSum', () => {
  it('exported', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([[-1, -1, 2], [-1, 0, 1]])
    expect(threeSum([0, 1, 1])).toStrictEqual([])
    expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]])
  })
})
