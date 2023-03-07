import { describe, expect, it } from 'vitest'
import { permuteUnique } from '../../../src/algorithms/back-tracking/047'

describe('permuteUnique', () => {
  it('exported', () => {
    // expect(permuteUnique([1, 1, 2])).toStrictEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]])
    // expect(permuteUnique([1, 2, 3])).toStrictEqual([
    //   [1, 2, 3], [1, 3, 2], [2, 1, 3],
    //   [2, 3, 1], [3, 1, 2], [3, 2, 1],
    // ])
    expect(permuteUnique([3, 3, 0, 3])).toStrictEqual([[0, 3, 3, 3], [3, 0, 3, 3], [3, 3, 0, 3], [3, 3, 3, 0]])
  })
})
