import { describe, expect, it } from 'vitest'
import { lastStoneWeightII } from '../../../src/algorithms/dynamic-programming/1049'

describe('lastStoneWeightII', () => {
  it('exported', () => {
    expect(lastStoneWeightII([2, 7, 4, 1, 8, 1])).toBe([31, 26, 33, 21, 40])
  })
})
