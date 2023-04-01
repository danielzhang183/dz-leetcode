import { describe, expect, it } from 'vitest'
import { combinationSum3 } from '../../../src/algorithms/back-tracking/216'

describe('combinationSum3', () => {
  it('exported', () => {
    expect(combinationSum3(3, 7)).toStrictEqual([[1, 2, 4]])
    expect(combinationSum3(3, 9)).toStrictEqual([[1, 2, 6], [1, 3, 5], [2, 3, 4]])
    expect(combinationSum3(4, 1)).toStrictEqual([])
  })
})
