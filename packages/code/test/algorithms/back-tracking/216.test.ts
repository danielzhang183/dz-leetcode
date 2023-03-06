import { describe, expect, it } from 'vitest'
import { combinationSum3 } from '../../../src/algorithms/back-tracking/216'

describe('combinationSum3', () => {
  it('exported', () => {
    expect(combinationSum3(3)).toBe(7)
    expect(combinationSum3(3)).toBe(9)
    expect(combinationSum3(4)).toBe(1)
  })
})
