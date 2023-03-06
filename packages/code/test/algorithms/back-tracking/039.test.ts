import { describe, expect, it } from 'vitest'
import { combinationSum } from '../../../src/algorithms/back-tracking/039'

describe('combinationSum', () => {
  it('exported', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])
    expect(combinationSum([2, 3, 5], 8)).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]])
    expect(combinationSum([2], 1)).toStrictEqual([])
    expect(combinationSum([8, 7, 4, 3], 11)).toStrictEqual([[3, 4, 4], [3, 8], [4, 7]])
    expect(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15)).toEqual([
      [11, 4], [12, 3], [3, 3, 3, 3, 3], [3, 3, 3, 6],
      [3, 3, 4, 5], [3, 3, 9], [3, 4, 4, 4],
      [3, 4, 8], [3, 5, 7], [3, 6, 6], [4, 4, 7],
      [4, 5, 6], [5, 5, 5], [6, 9], [7, 8],
    ])
  })
})
