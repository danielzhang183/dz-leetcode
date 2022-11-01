import { describe, expect, it } from 'vitest'
import { threeSum } from '../../../src/algorithms/sort/015'

describe('threeSum', () => {
  it('exported', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toBe([0, 1, 1])
  })
})