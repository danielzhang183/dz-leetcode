import { describe, expect, it } from 'vitest'
import { combinationSum } from '../../../src/algorithms/back-tracking/039'

describe('combinationSum', () => {
  it('exported', () => {
    expect(combinationSum([2, 3, 6, 7])).toBe(7)
    expect(combinationSum([2, 3, 5])).toBe(8)
    expect(combinationSum([2])).toBe(1)
  })
})
