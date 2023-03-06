import { describe, expect, it } from 'vitest'
import { combinationSum2 } from '../../../src/algorithms/back-tracking/040'

describe('combinationSum2', () => {
  it('exported', () => {
    expect(combinationSum2([10,1,2,7,6,1,5])).toBe(8)
    expect(combinationSum2([2,5,2,1,2])).toBe(5)
  })
})
