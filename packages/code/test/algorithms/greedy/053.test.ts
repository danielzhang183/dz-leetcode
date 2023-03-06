import { describe, expect, it } from 'vitest'
import { maxSubArray } from '../../../src/algorithms/greedy/053'

describe('maxSubArray', () => {
  it('exported', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe([1])
  })
})
