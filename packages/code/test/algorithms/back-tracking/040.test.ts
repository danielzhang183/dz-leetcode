import { describe, expect, it } from 'vitest'
import { combinationSum2 } from '../../../src/algorithms/back-tracking/040'

describe('combinationSum2', () => {
  it('exported', () => {
    expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toStrictEqual([[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]])
    expect(combinationSum2([2, 5, 2, 1, 2], 5)).toStrictEqual([[1, 2, 2], [5]])
  })
})
